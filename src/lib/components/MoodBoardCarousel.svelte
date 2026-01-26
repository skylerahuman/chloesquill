<script>
	const images = [
		{
			url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
			alt: 'Vintage Typewriter'
		},
		{
			url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80',
			alt: 'Old Library Books'
		},
		{
			url: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
			alt: 'Coffee and Rain'
		},
		{
			url: 'https://images.unsplash.com/photo-1507842217121-ad5596e55d56?auto=format&fit=crop&w=400&q=80',
			alt: 'Library Hall'
		},
		{
			url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&q=80',
			alt: 'Candlelight'
		},
		{
			url: 'https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=400&q=80',
			alt: 'Writing Hands'
		},
		{
			url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80',
			alt: 'Forest Mystery'
		},
		{
			url: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?auto=format&fit=crop&w=400&q=80',
			alt: 'Regency Letter'
		}
	];
</script>

<div class="relative w-full overflow-hidden bg-parchment-200 dark:bg-ink-900 py-12 border-t border-cedar-500/10">
	<!-- Eyebrow -->
	<div class="text-center mb-8">
		<span class="font-sans text-xs tracking-[0.3em] text-cedar-600 dark:text-cedar-500 uppercase font-bold opacity-70">
			Mood Board
		</span>
	</div>

	<!-- Carousel Track -->
	<div class="flex overflow-hidden group">
		<div class="flex animate-scroll hover:pause gap-4 px-4 w-max">
			<!-- First Set -->
			{#each images as image}
				<div class="relative w-64 h-80 flex-shrink-0 overflow-hidden rounded-sm bg-paper-300 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:z-10 group/item">
					<img
						src={image.url}
						alt={image.alt}
						class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
					/>
					<!-- Overlay Border -->
					<div class="absolute inset-0 border-4 border-white/90 dark:border-ink-800/20 pointer-events-none"></div>
					<!-- Caption -->
					<div class="absolute bottom-0 left-0 w-full bg-ink-900/80 p-2 text-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
						<span class="text-white font-serif text-sm italic">{image.alt}</span>
					</div>
				</div>
			{/each}

			<!-- Duplicate Set for Infinite Scroll -->
			{#each images as image}
				<div class="relative w-64 h-80 flex-shrink-0 overflow-hidden rounded-sm bg-paper-300 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:z-10 group/item">
					<img
						src={image.url}
						alt={image.alt}
						class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
					/>
					<div class="absolute inset-0 border-4 border-white/90 dark:border-ink-800/20 pointer-events-none"></div>
					<div class="absolute bottom-0 left-0 w-full bg-ink-900/80 p-2 text-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
						<span class="text-white font-serif text-sm italic">{image.alt}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Custom marquee animation if not in Tailwind config */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-scroll {
		animation: scroll 40s linear infinite;
	}
	.pause {
		animation-play-state: paused;
	}
</style>
