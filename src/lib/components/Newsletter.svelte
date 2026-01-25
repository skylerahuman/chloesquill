<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="text-center py-12">
	<h2 class="text-3xl font-bold font-serif mb-4">Stay Updated</h2>
	<p class="mb-8">
		Sign up for our newsletter to receive the latest news, updates, and exclusive content from
		Chloe.
	</p>
	<div class="flex flex-1 justify-center">
		<label class="flex flex-col min-w-40 h-14 max-w-[480px] flex-1">
			<div class="flex w-full flex-1 items-stretch rounded-xl h-full">
				<input
					placeholder="Enter your email"
					class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-espresso-brown focus:outline-0 focus:ring-0 border-none bg-parchment-cream/50 focus:border-none h-full placeholder:text-warm-cedar px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal"
					value=""
				/>
				<div
					class="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-parchment-cream/50 pr-2"
				>
					<Button label="Subscribe" />
				</div>
			</div>
		</label>
	</div>
</section>
