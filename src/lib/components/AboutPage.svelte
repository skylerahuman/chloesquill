<script lang="ts">
	// Atmosphere: environments only (landscapes / cafes / writing desks), per branding.md.
	const atmosphereImages = [
		{
			src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
			alt: 'Vintage pages',
			caption: 'The library'
		},
		{
			src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
			alt: 'Morning coffee',
			caption: 'The first cup'
		},
		{
			src: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=600&q=80',
			alt: 'Open sky over fields',
			caption: 'The walk'
		}
	];
</script>

<main>
	<!-- HERO -->
	<section class="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-24">
		<div class="max-w-3xl text-center">
			<span
				class="block font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-6"
				>The Author</span
			>
			<h1
				class="text-5xl md:text-7xl font-serif font-bold leading-tight text-espresso-900 dark:text-parchment-50 mb-6"
			>
				Chloe.
			</h1>
			<p class="text-xl md:text-2xl font-serif leading-relaxed text-espresso-700 dark:text-parchment-200">
				Young-adult romance, written slowly and meant to last.
			</p>
			<div class="mt-10 mx-auto w-16 h-[1px] bg-rose-400"></div>
		</div>
	</section>

	<!-- A NOTE -->
	<section class="px-6 md:px-12 py-16 md:py-24 max-w-3xl mx-auto">
		<span
			class="block font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-4"
			>A Note</span
		>
		<h2
			class="text-3xl md:text-4xl font-serif font-bold text-espresso-900 dark:text-parchment-50 mb-8 leading-tight"
		>
			What I'm writing toward.
		</h2>
		<div class="space-y-6 text-base md:text-lg font-serif leading-relaxed text-espresso-700 dark:text-parchment-200">
			<p>
				Jane Austen taught me that romance is a comedy of manners. A quieter teacher taught me
				that it is also a discipline of grace — choosing, again, to stay.
			</p>
			<p>
				My novels live in that tension. Drawing rooms, yes. Also mornings. Also the long walk
				after a hard conversation. I write for the reader who wants a love story that earns its
				ending.
			</p>
			<p>— Chloe</p>
		</div>
	</section>

	<!-- THE ATMOSPHERE -->
	<section class="py-16 md:py-24 px-6">
		<div class="max-w-6xl mx-auto">
			<div class="mb-12 max-w-2xl">
				<span
					class="block font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-3"
					>The Atmosphere</span
				>
				<h2
					class="text-3xl md:text-4xl font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
				>
					Where the stories start.
				</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each atmosphereImages as image (image.src)}
					<figure class="flex flex-col">
						<div class="overflow-hidden rounded-sm aspect-[3/4] bg-parchment-300">
							<img
								src={image.src}
								alt={image.alt}
								loading="lazy"
								class="w-full h-full object-cover"
							/>
						</div>
						<figcaption
							class="mt-3 font-serif italic text-espresso-700 dark:text-parchment-200"
						>
							{image.caption}
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<!-- CONTACT CTA -->
	<section class="py-16 md:py-24 px-6 text-center">
		<span
			class="block font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-3"
			>Say Hello</span
		>
		<h2 class="text-3xl md:text-4xl font-serif text-espresso-900 dark:text-parchment-50 mb-8">
			Notes from readers are the best part.
		</h2>
		<a
			href="/contact"
			class="inline-block px-10 py-4 bg-rose-500 hover:bg-rose-600 text-parchment-50 font-sans font-bold text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
		>
			Write to Chloe
		</a>
	</section>
</main>