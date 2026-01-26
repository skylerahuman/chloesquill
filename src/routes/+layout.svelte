<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import Button from '$lib/components/Button.svelte';

	let mobileMenuOpen = $state(false);

	onMount(() => {
		theme.init();
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="min-h-screen theme-transition">
	<header class="border-b-2 border-cedar-400 dark:border-cedar-600 backdrop-blur-sm bg-parchment-100/90 dark:bg-forest-800/90 sticky top-0 z-50 theme-transition">
		<nav class="container mx-auto px-4 md:px-6 lg:px-8 py-4">
			<div class="flex justify-between items-center">
				<a href="/" class="text-xl md:text-2xl font-bold font-serif text-forest-700 dark:text-parchment-100 hover:text-cedar-600 dark:hover:text-cedar-300 transition-colors">
					Chloe | YA Author
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-6 lg:space-x-8">
					<a href="/" data-sveltekit-preload-data="hover" class="font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300">
						Home
					</a>
					<a href="/books" data-sveltekit-preload-data="hover" class="font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300">
						Books
					</a>
					<a href="/journal" data-sveltekit-preload-data="hover" class="font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300">
						Journal
					</a>
					<a href="/about" data-sveltekit-preload-data="hover" class="font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300">
						About
					</a>
					<a href="/contact" data-sveltekit-preload-data="hover" class="font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300">
						Contact
					</a>
					<Button label={$theme === 'light' ? '🌙' : '☀️'} onClick={theme.toggle} variant="outline" size="sm" />
				</div>

				<!-- Mobile Menu Button -->
				<button
					onclick={toggleMobileMenu}
					class="md:hidden p-2 rounded-lg hover:bg-cedar-100 dark:hover:bg-cedar-900 transition-colors"
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="md:hidden mt-4 pt-4 border-t border-cedar-300 dark:border-cedar-700 space-y-3">
					<a href="/" data-sveltekit-preload-data="hover" class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300" onclick={toggleMobileMenu}>
						Home
					</a>
					<a href="/books" data-sveltekit-preload-data="hover" class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300" onclick={toggleMobileMenu}>
						Books
					</a>
					<a href="/journal" data-sveltekit-preload-data="hover" class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300" onclick={toggleMobileMenu}>
						Journal
					</a>
					<a href="/about" data-sveltekit-preload-data="hover" class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300" onclick={toggleMobileMenu}>
						About
					</a>
					<a href="/contact" data-sveltekit-preload-data="hover" class="block py-2 font-sans font-medium hover:text-cedar-600 dark:hover:text-cedar-300" onclick={toggleMobileMenu}>
						Contact
					</a>
					<div class="pt-2">
						<Button label={$theme === 'light' ? 'Dark Mode 🌙' : 'Light Mode ☀️'} onClick={theme.toggle} variant="outline" size="sm" class="w-full" />
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<main class="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20 py-8 md:py-12">
		<slot />
	</main>

	<footer class="border-t-2 border-cedar-400 dark:border-cedar-600 bg-parchment-100 dark:bg-forest-800 mt-12 theme-transition">
		<div class="container mx-auto px-4 md:px-6 py-8 text-center">
			<p class="text-sm md:text-base text-espresso-600 dark:text-parchment-300">© 2024 Chloe [Surname]. All rights reserved.</p>
			<p class="text-xs md:text-sm text-espresso-500 dark:text-parchment-400 mt-2">Crafting wholesome romance with faith and grace.</p>
		</div>
	</footer>
</div>
