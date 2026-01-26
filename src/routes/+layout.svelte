<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import ThemeLampToggle from '$lib/components/ThemeLampToggle.svelte';
	import LightingEngine from '$lib/components/LightingEngine.svelte';
	import AmbientParticles from '$lib/components/AmbientParticles.svelte';
	import MoodBoardCarousel from '$lib/components/MoodBoardCarousel.svelte';
	import InteractiveQuill from '$lib/components/InteractiveQuill.svelte';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	onMount(() => {
		theme.init();
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<LightingEngine />

<div class="min-h-screen theme-transition bg-paper-200 dark:bg-[#080605]">
	<!-- NAVIGATION -->
	<nav
		class="fixed top-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-start mix-blend-normal transition-colors duration-500"
	>
		<!-- Logo -->
		<a
			href="/"
			class="text-3xl font-serif italic font-bold tracking-tight relative group cursor-pointer z-50 text-ink-900 dark:text-paper-100 mix-blend-difference flex items-center gap-3"
		>
			<InteractiveQuill />
			Chloe.
			<span
				class="absolute -bottom-1 left-0 w-0 h-[2px] bg-cedar-500 transition-all duration-300 group-hover:w-full"
			></span>
		</a>

		<div class="flex items-start space-x-12 z-50">
			<!-- Links -->
			<div
				class="hidden md:flex space-x-8 text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-ink-800/70 dark:text-paper-200/70 pt-4 mix-blend-difference"
			>
				<a href="/" class="hover:text-cedar-500 transition-colors">Home</a>
				<a href="/books" class="hover:text-cedar-500 transition-colors">Books</a>
				<a href="/journal" class="hover:text-cedar-500 transition-colors">Journal</a>
				<a href="/about" class="hover:text-cedar-500 transition-colors">About</a>
				<a href="/contact" class="hover:text-cedar-500 transition-colors">Contact</a>
			</div>

			<!-- THE LAMP PULL CORD -->
			<ThemeLampToggle />
		</div>

		<!-- Mobile Menu Button (Positioned Absolutely) -->
		<button
			onclick={toggleMobileMenu}
			class="md:hidden absolute right-6 top-8 p-2 rounded-lg hover:bg-cedar-100 dark:hover:bg-cedar-900 transition-colors z-50"
			aria-label="Toggle menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</nav>

	<!-- Mobile Navigation Dropdown -->
	{#if mobileMenuOpen}
		<div
			class="md:hidden fixed top-24 right-6 bg-white dark:bg-ink-900 rounded-lg shadow-2xl border border-cedar-300 dark:border-cedar-700 p-6 space-y-3 z-50 min-w-[200px]"
		>
			<a
				href="/"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300"
				onclick={toggleMobileMenu}
			>
				Home
			</a>
			<a
				href="/books"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300"
				onclick={toggleMobileMenu}
			>
				Books
			</a>
			<a
				href="/journal"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300"
				onclick={toggleMobileMenu}
			>
				Journal
			</a>
			<a
				href="/about"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300"
				onclick={toggleMobileMenu}
			>
				About
			</a>
			<a
				href="/contact"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300"
				onclick={toggleMobileMenu}
			>
				Contact
			</a>
		</div>
	{/if}

	{@render children()}

	<MoodBoardCarousel />

	<AmbientParticles />

	<!-- FOOTER -->
	<footer class="bg-ink-900 dark:bg-[#050404] text-paper-200 py-32 relative overflow-hidden mt-12">
		<!-- Dust Texture -->
		<div
			class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
		></div>
		<!-- Bottom Glow (Reinforced Hearth) -->
		<div
			class="hidden dark:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-cedar-600/30 to-transparent blur-[50px] pointer-events-none"
		></div>

		<div class="container mx-auto px-6 relative z-10 flex flex-col items-center">
			<h2 class="text-5xl md:text-8xl font-serif text-paper-300 mb-12 opacity-90 text-depth">
				The End.
			</h2>
			<div
				class="flex space-x-12 text-[10px] font-sans tracking-[0.3em] uppercase text-cedar-500 font-bold"
			>
				<a href="#" class="hover:text-white transition-colors">Instagram</a>
				<a href="#" class="hover:text-white transition-colors">Goodreads</a>
				<a href="#" class="hover:text-white transition-colors">Substack</a>
			</div>
			<p class="mt-16 text-[10px] text-ink-600 uppercase tracking-widest">
				© 2026 Chloe | Designed & Developed by skylershuman.com
			</p>
		</div>
	</footer>
</div>
