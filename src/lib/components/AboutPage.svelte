<script lang="ts">
	const galleryImages = [
		{
			src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
			alt: 'Antique books stacked on wooden table with vintage aesthetic'
		},
		{
			src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
			alt: 'Open book with warm lighting and cozy reading atmosphere'
		},
		{
			src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
			alt: 'Coffee cup and journal on rustic wooden surface'
		},
		{
			src: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&q=80',
			alt: 'Serene forest path with dappled sunlight'
		},
		{
			src: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=800&q=80',
			alt: 'Charming European countryside village scene'
		},
		{
			src: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80',
			alt: 'Vintage typewriter on wooden desk with nostalgic ambiance'
		}
	];
</script>

<div class="mx-auto px-4 py-8 md:py-12">
	<div class="space-y-10 md:space-y-12">
		<div
			class="bg-white dark:bg-forest-900 rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl border border-parchment-300 dark:border-forest-600 transition-colors duration-300"
		>
			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight text-espresso-900 dark:text-parchment-100 mb-8"
			>
				About Chloe
			</h1>
			<p
				class="text-espresso-700 dark:text-parchment-200 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed"
			>
				Chloe crafts heartwarming young adult fiction that blends Austen-inspired romance with
				contemporary faith. Her stories explore love, virtue, and growth in charming small-town
				settings.
			</p>
		</div>

		<section
			class="bg-white dark:bg-forest-900 rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl border border-parchment-300 dark:border-forest-600 transition-colors duration-300"
		>
			<h2
				class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight tracking-tight text-espresso-900 dark:text-parchment-100 mb-6"
			>
				Her Journey
			</h2>
			<p
				class="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-espresso-700 dark:text-parchment-200"
			>
				Inspired by Jane Austen from childhood, Chloe transforms her passion for classic literature
				into stories of grace and resilience. Faith anchors her narratives, weaving hope and
				redemption throughout.
			</p>
		</section>

		<section
			class="bg-white dark:bg-forest-900 rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl border border-parchment-300 dark:border-forest-600 transition-colors duration-300"
		>
			<h2
				class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight tracking-tight text-espresso-900 dark:text-parchment-100 mb-6"
			>
				Beyond Writing
			</h2>
			<p
				class="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-espresso-700 dark:text-parchment-200"
			>
				Travel, coffee culture, and time with loved ones fuel her creativity. These experiences
				enrich her characters and settings with authentic depth.
			</p>
		</section>

		<section
			class="bg-white dark:bg-forest-900 rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl border border-parchment-300 dark:border-forest-600 transition-colors duration-300"
		>
			<h2
				class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight tracking-tight text-espresso-900 dark:text-parchment-100 mb-8"
			>
				Inspiration Gallery
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{#each galleryImages as image (image.src)}
					<div
						class="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-parchment-100 dark:bg-forest-800"
					>
						<img
							src={image.src}
							alt={image.alt}
							class="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>
