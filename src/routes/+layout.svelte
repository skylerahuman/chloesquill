<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import Button from '$lib/components/Button.svelte';

	onMount(() => {
		theme.init();
	});
</script>

<div
	class="bg-parchment-cream text-espresso-brown dark:bg-forest-green dark:text-parchment-cream min-h-screen"
>
	<header class="border-b border-warm-cedar px-10 py-3">
		<nav class="container mx-auto flex justify-between items-center">
			<a href="/" class="text-lg font-bold font-serif">Chloe | YA Author</a>
			<div class="md:flex items-center space-x-4">
				<a href="/" data-sveltekit-preload-data="hover" class="hover:text-warm-cedar">Home</a>
				<a href="/books" data-sveltekit-preload-data="hover" class="hover:text-warm-cedar">Books</a>
				<a href="/journal" data-sveltekit-preload-data="hover" class="hover:text-warm-cedar"
					>Journal</a
				>
				<a href="/about" data-sveltekit-preload-data="hover" class="hover:text-warm-cedar">About</a>
				<a href="/contact" data-sveltekit-preload-data="hover" class="hover:text-warm-cedar"
					>Contact</a
				>
				<Button label="{$theme === 'light' ? 'Dark' : 'Light'} Mode" onClick={theme.toggle} />
			</div>
		</nav>
	</header>

	<main class="px-40 flex flex-1 justify-center py-5">
		<slot />
	</main>

	<footer class="text-center py-4 border-t border-warm-cedar mt-8">
		<p>© 2024 Chloe [Surname]. All rights reserved.</p>
	</footer>
</div>
