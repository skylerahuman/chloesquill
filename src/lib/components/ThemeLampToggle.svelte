<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let swinging = $state(false);

	function handleToggle() {
		// Trigger swing animation
		swinging = true;

		// Re-add sway after swing finishes
		setTimeout(() => {
			swinging = false;
		}, 1500);

		// Toggle theme
		theme.toggle();
	}

	onMount(() => {
		// Initial theme setup if needed
		theme.init();
	});
</script>

<!-- THE LAMP PULL CORD (Physics Object - Refined Size) -->
<div class="relative group flex flex-col items-center">
	<!-- Anchor Point (Screw) -->
	<div class="w-2 h-2 rounded-full bg-ink-300 dark:bg-brass-dark shadow-sm z-10"></div>

	<!-- The Swing Wrapper -->
	<button
		id="theme-toggle"
		class="origin-top {swinging
			? 'animate-swing'
			: 'animate-sway'} hover:pause focus:outline-none cursor-pointer"
		onclick={handleToggle}
		aria-label="Pull Light Cord"
	>
		<!-- The Bead Chain -->
		<div
			class="bead-chain h-24 w-[3px] mx-auto opacity-90 transition-all duration-300"
			style="background-image: radial-gradient(circle at 60% 40%, rgba(255,255,255,0.8) 0%, rgba(180,140,80,1) 40%, rgba(60,40,10,1) 100%); background-size: 4px 4px; background-repeat: repeat-y;"
		></div>

		<!-- The Handle (Brass Teardrop - Realistic) -->
		<div
			class="w-5 h-8 brass-handle relative shadow-lg transform transition-transform duration-200 group-hover:scale-105"
			style="border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: radial-gradient(circle at 30% 30%, #fffacd 0%, #d4af37 40%, #8b6c42 80%, #3e2723 100%); box-shadow: inset -2px -2px 6px rgba(0,0,0,0.5), 2px 5px 10px rgba(0,0,0,0.6);"
		>
			<!-- Highlight -->
			<div
				class="absolute top-2 left-1.5 w-1 h-2.5 bg-white opacity-60 rounded-full filter blur-[0.8px] rotate-[-15deg]"
			></div>
		</div>
	</button>
</div>
