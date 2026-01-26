<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="bg-parchment-100 dark:bg-forest-900 rounded-lg shadow-md p-8 md:p-12 text-center border border-parchment-300 dark:border-forest-700"
>
	<h2
		class="text-3xl md:text-4xl font-bold font-serif mb-4 text-espresso-900 dark:text-parchment-100"
	>
		Stay Updated
	</h2>
	<p class="text-base md:text-lg mb-6 max-w-2xl mx-auto text-espresso-700 dark:text-parchment-200">
		Sign up for our newsletter to receive the latest news, updates, and exclusive content from
		Chloe.
	</p>
	<div class="flex justify-center">
		<form class="flex flex-col sm:flex-row gap-3 w-full max-w-md">
			<input
				type="email"
				placeholder="Enter your email"
				class="flex-1 px-4 py-3 rounded-md border border-espresso-300 dark:border-forest-600 bg-white dark:bg-forest-800 text-espresso-700 dark:text-parchment-200 placeholder:text-espresso-400 dark:placeholder:text-forest-400 focus:outline-none focus:ring-2 focus:ring-cedar-500 focus:border-transparent transition-all"
				required
			/>
			<Button label="Subscribe" size="md" class="sm:w-auto w-full" />
		</form>
	</div>
</section>
