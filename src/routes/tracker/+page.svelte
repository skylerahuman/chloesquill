<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Heatmap from '$lib/components/Heatmap.svelte';
	import TrackerTimer from '$lib/components/TrackerTimer.svelte';
	import {
		STORAGE_KEY_STATE,
		STORAGE_KEY_HISTORY,
		SESSION_KEY_AUTH,
		getESTDateString,
		getESTParts,
		getLiveSeconds,
		applyRollover,
		toggleRunning,
		buildHeatmap,
		isCorrectPassword,
		type TrackerState,
		type TrackerHistory,
		type HeatmapGrid
	} from '$lib/utils/tracker';

	// --- Auth ---
	let authenticated = $state(false);
	let passwordInput = $state('');
	let loginError = $state('');

	// --- Tracker reactive state (hydrated from localStorage in onMount) ---
	let trackerState: TrackerState = $state({
		currentDate: '',
		accumulatedSeconds: 0,
		startedAt: null
	});
	let trackerHistory: TrackerHistory = $state({});
	let now = $state(Date.now());

	// --- Derived ---
	let liveSeconds = $derived(getLiveSeconds(trackerState, now));
	let running = $derived(trackerState.startedAt !== null);
	let estParts = $derived(getESTParts(new Date(now)));
	let estClock = $derived(
		`${String(estParts.hours).padStart(2, '0')}:${String(estParts.minutes).padStart(2, '0')}:${String(estParts.seconds).padStart(2, '0')}`
	);
	let estDate = $derived(
		`${getESTDateString(new Date(now))} (${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][estParts.weekday]})`
	);

	// Merge live seconds into display history so today's cell fills in real-time.
	let displayHistory = $derived.by(() => {
		const h: TrackerHistory = { ...trackerHistory };
		const today = getESTDateString(new Date(now));
		const live = getLiveSeconds(trackerState, now);
		if (live > 0) {
			h[today] = (h[today] ?? 0) + live;
		}
		return h;
	});

	let grid: HeatmapGrid = $derived(buildHeatmap(displayHistory, now));

	// --- Persistence ---
	function persistTrackerState() {
		if (!browser) return;
		try {
			localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(trackerState));
		} catch {
			/* quota exceeded — ignore */
		}
	}

	function persistTrackerHistory() {
		if (!browser) return;
		try {
			localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(trackerHistory));
		} catch {
			/* quota exceeded — ignore */
		}
	}

	function hydrate() {
		if (!browser) return;
		try {
			const raw = localStorage.getItem(STORAGE_KEY_STATE);
			if (raw) {
				trackerState = JSON.parse(raw) as TrackerState;
			}
		} catch {
			/* corrupt data — keep defaults */
		}
		try {
			const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
			if (raw) {
				trackerHistory = JSON.parse(raw) as TrackerHistory;
			}
		} catch {
			/* corrupt data — keep defaults */
		}

		// First visit: seed the active day to today's EST date.
		if (!trackerState.currentDate) {
			trackerState = {
				...trackerState,
				currentDate: getESTDateString(new Date(now))
			};
		}
	}

	// --- 1-second tick: advances the clock and detects midnight rollover ---
	function tick() {
		now = Date.now();
		const result = applyRollover(trackerState, trackerHistory, now);
		if (result.rolledOver) {
			trackerState = result.state;
			trackerHistory = result.history;
			persistTrackerState();
			persistTrackerHistory();
		}
	}

	// --- Handlers ---
	function handleToggle() {
		// Apply rollover first so time doesn't attribute to the wrong day.
		const result = applyRollover(trackerState, trackerHistory, now);
		if (result.rolledOver) {
			trackerState = result.state;
			trackerHistory = result.history;
			persistTrackerHistory();
		}
		trackerState = toggleRunning(trackerState, now);
		persistTrackerState();
	}

	function handleLogin() {
		if (isCorrectPassword(passwordInput)) {
			authenticated = true;
			loginError = '';
			if (browser) {
				sessionStorage.setItem(SESSION_KEY_AUTH, '1');
			}
		} else {
			loginError = 'Incorrect password.';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') handleLogin();
	}

	onMount(() => {
		// Restore session auth so refreshes don't require re-login.
		if (browser && sessionStorage.getItem(SESSION_KEY_AUTH) === '1') {
			authenticated = true;
		}

		hydrate();
		tick(); // catch a missed midnight rollover immediately

		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	});
</script>

<svelte:head>
	<title>Tracker | Chloe</title>
</svelte:head>

<div class="min-h-[80vh] flex items-center justify-center px-4 py-24">
	{#if !authenticated}
		<!-- ========== PASSWORD GATE ========== -->
		<div class="max-w-sm w-full mx-auto space-y-8 text-center">
			<div>
				<h1
					class="text-4xl font-serif font-bold text-espresso-700 dark:text-parchment-100"
				>
					Tracker
				</h1>
				<p class="mt-3 text-sm font-sans text-espresso-500/60">
					Enter the password to access your time tracker.
				</p>
			</div>

			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleLogin();
				}}
				class="space-y-4"
			>
				<div>
					<label
						for="tracker-password"
						class="block text-left text-xs font-sans text-espresso-500/70 mb-1"
					>
						Password
					</label>
					<input
						id="tracker-password"
						type="password"
						bind:value={passwordInput}
						onkeydown={handleKeydown}
						autocomplete="off"
						class="w-full p-3 rounded-lg border border-espresso-300 dark:border-espresso-600 bg-parchment-100 dark:bg-ink-800 text-espresso-700 dark:text-parchment-200 font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 transition-colors"
					/>
				</div>

				{#if loginError}
					<p class="text-sm font-sans text-cedar-600 dark:text-cedar-400">
						{loginError}
					</p>
				{/if}

				<button
					type="submit"
					class="w-full font-sans font-medium rounded-lg bg-forest-500 text-parchment-50 hover:bg-forest-600 active:bg-forest-700 focus:ring-2 focus:ring-forest-400 px-6 py-3 text-base transition-all duration-250"
				>
					Unlock
				</button>
			</form>
		</div>
	{:else}
		<!-- ========== TRACKER ========== -->
		<div class="w-full max-w-4xl mx-auto space-y-16">
			<!-- Header -->
			<div class="text-center">
				<h1
					class="text-4xl font-serif font-bold text-espresso-700 dark:text-parchment-100"
				>
					Tracker
				</h1>
				<p class="mt-3 text-sm font-sans text-espresso-500/60">
					Track your daily writing time. Your timer resets at midnight Eastern.
				</p>
			</div>

			<!-- Timer -->
			<section class="py-12">
				<TrackerTimer
					seconds={liveSeconds}
					running={running}
					onToggle={handleToggle}
					{estClock}
					{estDate}
				/>
			</section>

			<!-- Heatmap — parchment card ensures the forest-green scale is always legible -->
			<section
				class="bg-parchment-200 dark:bg-parchment-200 rounded-2xl p-6 md:p-8 border border-parchment-400/50"
			>
				<h2
					class="text-xl font-serif font-semibold text-espresso-700 mb-6 pb-4 border-b border-parchment-400/50"
				>
					Writing Heat
				</h2>
				<Heatmap {grid} />
			</section>
		</div>
	{/if}
</div>
