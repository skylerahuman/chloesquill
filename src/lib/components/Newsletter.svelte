<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="bg-parchment-100 dark:bg-forest-900 rounded-sm p-8 md:p-12 text-center border border-rose-200 dark:border-rose-800 max-w-5xl mx-auto"
>
	<span
		class="block font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-3"
		>Newsletter</span
	>
	<h2
		class="text-3xl md:text-4xl font-bold font-serif mb-4 text-espresso-900 dark:text-parchment-50"
	>
		New chapters, quietly delivered.
	</h2>
	<p class="text-base md:text-lg mb-8 max-w-2xl mx-auto text-espresso-700 dark:text-parchment-200">
		A short note when a new project starts, finishes, or turns a corner. No spam, no urgency.
	</p>
	<form class="flex justify-center">
		<div class="flex flex-col sm:flex-row gap-3 w-full max-w-md">
			<input
				type="email"
				placeholder="you@somewhere"
				class="flex-1 px-4 py-3 rounded-sm border border-espresso-300 dark:border-forest-600 bg-parchment-50 dark:bg-forest-800 text-espresso-700 dark:text-parchment-100 placeholder:text-espresso-400 dark:placeholder:text-forest-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
				required
			/>
			<Button label="Subscribe" size="md" variant="primary" class="sm:w-auto w-full" />
		</div>
	</form>
</section>