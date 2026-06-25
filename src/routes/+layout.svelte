<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import ThemeLampToggle from '$lib/components/ThemeLampToggle.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	onMount(() => {
		theme.init();
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="min-h-screen theme-transition bg-parchment-200 dark:bg-forest-900">
	<!-- NAVIGATION -->
	<nav
		class="fixed top-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-start transition-colors duration-500"
	>
		<!-- Logo -->
		<a
			href="/"
			class="text-3xl font-serif italic font-bold tracking-tight relative group cursor-pointer z-50 text-espresso-900 dark:text-parchment-100"
		>
			Chloe.
			<span
				class="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-500 transition-all duration-300 group-hover:w-full"
			></span>
		</a>

		<div class="flex items-start space-x-12 z-50">
			<!-- Links -->
			<div
				class="hidden md:flex space-x-8 text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-espresso-800/70 dark:text-parchment-200/70 pt-4"
			>
				<a href="/" class="hover:text-rose-500 transition-colors">Home</a>
				<a href="/projects" class="hover:text-rose-500 transition-colors">Projects</a>
				<a href="/about" class="hover:text-rose-500 transition-colors">About</a>
				<a href="/contact" class="hover:text-rose-500 transition-colors">Contact</a>
			</div>

			<!-- THE LAMP PULL CORD -->
			<ThemeLampToggle />
		</div>

		<!-- Mobile Menu Button (Positioned Absolutely) -->
		<button
			onclick={toggleMobileMenu}
			class="md:hidden absolute right-6 top-8 p-2 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors z-50"
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
			class="md:hidden fixed top-24 right-6 bg-parchment-50 dark:bg-espresso-900 rounded-lg border border-parchment-300 dark:border-espresso-700 p-6 space-y-3 z-50 min-w-[200px]"
		>
			<a
				href="/"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-rose-500 dark:hover:text-rose-400"
				onclick={toggleMobileMenu}
			>
				Home
			</a>
			<a
				href="/projects"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-rose-500 dark:hover:text-rose-400"
				onclick={toggleMobileMenu}
			>
				Projects
			</a>
			<a
				href="/about"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-rose-500 dark:hover:text-rose-400"
				onclick={toggleMobileMenu}
			>
				About
			</a>
			<a
				href="/contact"
				data-sveltekit-preload-data="hover"
				class="block py-2 font-sans font-medium hover:text-rose-500 dark:hover:text-rose-400"
				onclick={toggleMobileMenu}
			>
				Contact
			</a>
		</div>
	{/if}

	{@render children()}

	<Footer />
</div>