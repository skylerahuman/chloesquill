<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount, onDestroy } from 'svelte';

	let isHovered = $state(false);
	let isClicked = $state(false);

	const beadSpacing = 13;
	const hoverExtra = 1.25; 
	const clickExtra = 1.75; 

	// Calculate how many beads are revealed from the top
	let pullOffset = $derived(
		(isHovered ? hoverExtra : 0) * beadSpacing + 
		(isClicked ? clickExtra : 0) * beadSpacing
	);

	// Velocity-based Physics Sway
	let swayPos = $state(0);
	let swayVel = 0;
	let lastTime = 0;
	let animationFrame: number;

	function updatePhysics(time: number) {
		if (!lastTime) lastTime = time;
		const dt = (time - lastTime) / 1000; // time in seconds
		lastTime = time;

		// 1. Random "Wind" Acceleration (RNG changes velocity)
		// We add a tiny bit of random acceleration 
		if (Math.random() > 0.98) {
			const gust = (Math.random() - 0.5) * 40; // Random kick
			swayVel += gust;
		}

		// 2. Restorative Force (Hooke's Law lite)
		// Pulls the chain back to center
		const springK = 15; 
		const accel = -swayPos * springK;
		swayVel += accel * dt;

		// 3. Damping (Air Resistance)
		swayVel *= 0.98;

		// 4. Update Position
		swayPos += swayVel * dt;

		animationFrame = requestAnimationFrame(updatePhysics);
	}

	onMount(() => {
		animationFrame = requestAnimationFrame(updatePhysics);
	});

	onDestroy(() => {
		if (animationFrame) cancelAnimationFrame(animationFrame);
	});

	function handleToggle() {
		if (isClicked) return;
		isClicked = true;
		theme.toggle();
		
		setTimeout(() => {
			isClicked = false;
		}, 150);
	}
</script>

<div class="relative flex flex-col items-center select-none">
	<!-- Socket/Anchor: Fixed at the top -->
	<div class="w-4 h-2 bg-ink-900 dark:bg-paper-100 rounded-t-sm z-30 shadow-sm -mb-px"></div>

	<button 
		onclick={handleToggle}
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
		class="focus:outline-none cursor-pointer relative group"
		aria-label="Pull Light Cord"
	>
		<svg 
			width="40" 
			height="180" 
			viewBox="0 0 40 180"
			class="text-ink-900 dark:text-paper-100 fill-current overflow-hidden transition-colors duration-500"
		>
			<g 
				class="pull-group"
				style="transform: translateY({pullOffset}px)"
			>
				{#each Array(12) as _, i}
					{@const yPos = 8 + (i - 9) * beadSpacing}
					<circle 
						cx="20" 
						cy={yPos} 
						r="5" 
						class="sway-node"
						style="--idx: {i}; --sway-val: {swayPos};"
					/>
				{/each}

				<rect 
					x="13" 
					y={8 + (11 - 9) * beadSpacing + 11} 
					width="14" 
					height="24" 
					rx="7" 
					ry="7"
					class="sway-node"
					style="--idx: 14; --sway-val: {swayPos};"
				/>
			</g>
		</svg>
	</button>
</div>

<style>
	.pull-group {
		transition: transform 150ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.sway-node {
		/* 
		   Position update at 60fps (or screen refresh rate).
		   Top visible bead (idx 9) is anchor (0 amplitude).
		*/
		transform: translateX(
			calc(
				var(--sway-val) * 
				(max(0, var(--idx) - 9) * 0.15px)
			)
		);
		/* No transition for the sway itself to maintain 60fps responsiveness */
		transform-origin: 20px 0;
	}

	button:hover .sway-node {
		filter: brightness(1.1);
	}
</style>
