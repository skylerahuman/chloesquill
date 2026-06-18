<script lang="ts">
	interface Props {
		/** Total seconds for the active day (live). */
		seconds: number;
		/** Whether the timer is currently running. */
		running: boolean;
		/** Callback to start/stop the timer. */
		onToggle: () => void;
		/** Current EST time formatted as HH:MM:SS. */
		estClock: string;
		/** Current EST date formatted nicely. */
		estDate: string;
	}

	let { seconds, running, onToggle, estClock, estDate }: Props = $props();

	function fmt(totalSeconds: number): string {
		const s = Math.max(0, Math.floor(totalSeconds));
		const hours = Math.floor(s / 3600);
		const minutes = Math.floor((s % 3600) / 60);
		const secs = s % 60;
		const pad = (n: number) => String(n).padStart(2, '0');
		return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
	}

	let hh = $derived(fmt(seconds).slice(0, 2));
	let mm = $derived(fmt(seconds).slice(3, 5));
	let ss = $derived(fmt(seconds).slice(6, 8));
</script>

<div class="flex flex-col items-center gap-6">
	<!-- EST date & clock -->
	<div class="text-center">
		<p class="text-[11px] font-sans tracking-[0.25em] uppercase text-espresso-500/60">{estDate}</p>
		<p class="text-lg font-sans font-light text-espresso-500/60 tabular-nums">{estClock} EST</p>
	</div>

	<!-- Timer digits -->
	<div class="flex items-baseline gap-1 select-none">
		<span class="text-6xl md:text-8xl font-serif font-bold text-espresso-700 dark:text-parchment-100 tabular-nums tracking-tight"
			>{hh}</span
		>
		<span class="text-4xl md:text-6xl font-serif text-espresso-500/40 animate-pulse">:</span>
		<span class="text-6xl md:text-8xl font-serif font-bold text-espresso-700 dark:text-parchment-100 tabular-nums tracking-tight"
			>{mm}</span
		>
		<span class="text-4xl md:text-6xl font-serif text-espresso-500/40 animate-pulse">:</span>
		<span class="text-6xl md:text-8xl font-serif font-bold text-espresso-700 dark:text-parchment-100 tabular-nums tracking-tight"
			>{ss}</span
		>
	</div>

	<!-- Running indicator -->
	{#if running}
		<div class="flex items-center gap-2">
			<span class="relative flex h-3 w-3">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-75"
				></span>
				<span class="relative inline-flex h-3 w-3 rounded-full bg-forest-500"></span>
			</span>
			<span class="text-[11px] font-sans tracking-[0.25em] uppercase text-forest-600 dark:text-forest-300"
				>Tracking</span
			>
		</div>
	{:else}
		<p class="text-[11px] font-sans tracking-[0.25em] uppercase text-espresso-500/40">Paused</p>
	{/if}

	<!-- Toggle button -->
	<button
		onclick={onToggle}
		class="font-sans font-medium rounded-lg transition-all duration-250 focus:ring-2 focus:ring-offset-2
		       {running
				? 'bg-cedar-600 text-parchment-50 hover:bg-cedar-700 active:bg-cedar-800 focus:ring-cedar-400 px-8 py-3 text-base'
				: 'bg-forest-500 text-parchment-50 hover:bg-forest-600 active:bg-forest-700 focus:ring-forest-400 px-8 py-3 text-base'}"
	>
		{running ? 'Stop' : 'Start'}
	</button>
</div>
