<script lang="ts">
	import { onMount } from 'svelte';

	// Gallery images for atmosphere section
	const atmosphereImages = [
		{
			src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
			alt: 'Books',
			caption: 'Vintage pages'
		},
		{
			src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
			alt: 'Coffee',
			caption: 'Morning rituals'
		},
		{
			src: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=600&q=80',
			alt: 'Travel',
			caption: 'Quiet places'
		}
	];

	onMount(() => {
		// Scroll reveal logic
		const observerOptions = {
			threshold: 0.15,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active');
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		document.querySelectorAll('.reveal-text, .reveal-image').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<main>
	<!-- HERO SECTION: Morning Paper / Evening Novel -->
	<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
		<!-- Background Typography (Texture) -->
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
		>
			<h1
				class="text-[20vw] font-serif font-bold leading-none text-ink-900 opacity-[0.03] dark:opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay blur-[0px] transition-opacity duration-1000 text-depth"
			>
				CHAPTER I
			</h1>
		</div>

		<div
			class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full"
		>
			<!-- Hero Image (Photo Frame Style) -->
			<div class="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 relative mt-16 lg:mt-0">
				<div
					class="relative w-full aspect-[4/5] max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out cast-shadow"
				>
					<!-- Paper Edge Effect -->
					<div
						class="absolute inset-0 bg-paper-100 transform translate-x-1 translate-y-1 border border-paper-300"
					></div>

					<!-- Main Image -->
					<div
						class="relative w-full h-full overflow-hidden bg-white border-[6px] border-white dark:border-paper-300 reveal-image active"
					>
						<img
							src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80"
							alt="Chloe Writing"
							class="w-full h-full object-cover filter contrast-110 sepia-[0.2] dark:sepia-[0.5] dark:brightness-[0.8] transition-all duration-1000"
						/>
						<!-- Inner Shadow for depth -->
						<div
							class="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] opacity-0 dark:opacity-100 transition-opacity duration-1000"
						></div>
					</div>

					<!-- Tape/Sticker -->
					<div
						class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-cedar-200/90 backdrop-blur-sm rotate-[-1deg] shadow-sm opacity-90"
					></div>
				</div>
			</div>

			<!-- Hero Text (Headline Style) -->
			<div class="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 text-center lg:text-left">
				<div class="reveal-text">
					<div
						class="inline-flex items-center space-x-3 mb-8 border-b border-cedar-500/30 pb-2"
					>
						<span class="text-cedar-600 dark:text-cedar-500 font-serif italic text-xl"
							>The Author</span
						>
						<span
							class="w-1 h-1 rounded-full bg-cedar-500 shadow-[0_0_8px_rgba(217,78,24,0.8)]"
						></span>
						<span
							class="font-sans text-[10px] tracking-widest uppercase text-ink-600 dark:text-paper-400"
							>Est. 1995</span
						>
					</div>

					<h2
						class="text-6xl md:text-8xl font-serif font-bold font-headline leading-[0.85] text-ink-900 dark:text-paper-100 mb-8 tracking-tight text-depth"
					>
						Weaving <br />
						<span class="text-cedar-600 dark:text-cedar-500 font-serif italic font-normal"
							>Sacred</span
						> Threads.
					</h2>
				</div>
				<div class="reveal-text" style="transition-delay: 0.2s;">
					<p
						class="font-serif text-xl md:text-2xl leading-relaxed text-ink-700 dark:text-paper-300 max-w-lg mx-auto lg:mx-0 border-l-2 border-cedar-500/50 pl-6 text-depth"
					>
						Where the propriety of a Regency ballroom meets the raw honesty of modern faith.
						<br /><span
							class="text-base font-sans mt-4 block text-ink-500 dark:text-paper-400 uppercase tracking-widest"
							>A world of quiet strength.</span
						>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- THE LETTER (Intimate) -->
	<section
		class="py-32 relative overflow-hidden transition-colors duration-500 bg-white dark:bg-[#120e0d]"
	>
		<!-- Vertical Line -->
		<div
			class="absolute left-1/2 transform -translate-x-1/2 top-0 h-20 w-[1px] bg-cedar-500/40"
		></div>

		<div class="container mx-auto px-6 md:px-20 max-w-3xl text-center relative z-10">
			<div class="mb-12">
				<h3
					class="font-hand text-5xl md:text-6xl text-cedar-600 dark:text-cedar-500 transform -rotate-2 reveal-text drop-shadow-sm text-depth"
				>
					A Note to You
				</h3>
			</div>

			<div
				class="font-serif text-2xl md:text-4xl leading-relaxed text-ink-900 dark:text-paper-200 reveal-text space-y-10 text-depth"
			>
				<p>
					"I don't write for the perfect. I write for the <span
						class="italic text-cedar-600 border-b-2 border-cedar-500/30 pb-1">anxious heart</span
					> that still dares to hope."
				</p>
				<div class="w-16 h-[1px] bg-cedar-500 mx-auto opacity-50 shadow-[0_0_10px_rgba(217,78,24,0.5)]"></div>
				<p
					class="text-lg md:text-xl font-sans font-light leading-loose text-ink-600 dark:text-paper-400"
				>
					Jane Austen taught me that romance is a comedy of manners. Life taught me it is a
					tragedy of grace. My stories exist in the tension between the two—finding God not in the
					grand miracles, but in the quiet courage of getting up one more time.
				</p>
			</div>

			<div class="mt-20 reveal-text cast-shadow">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
					alt="Signature"
					class="h-24 mx-auto opacity-80 dark:filter dark:invert transition-all duration-500"
					style="filter: brightness(0.3) sepia(1) hue-rotate(-40deg) saturate(3);"
				/>
			</div>
		</div>
	</section>

	<!-- THE MUSE (Atmosphere) -->
	<section
		class="py-32 bg-paper-200 dark:bg-[#080605] transition-colors duration-500 border-t border-ink-900/5 dark:border-paper-100/5"
	>
		<div class="container mx-auto px-6 mb-20 flex flex-col md:flex-row items-end justify-between">
			<div class="reveal-text">
				<span
					class="font-sans text-xs tracking-[0.3em] text-cedar-600 uppercase block mb-4 font-bold"
					>The Atmosphere</span
				>
				<h2
					class="text-5xl md:text-7xl font-serif text-ink-900 dark:text-paper-100 leading-none text-depth"
				>
					Burnt Orange <br /> & <span class="italic text-cedar-600 dark:text-cedar-500"
						>Old Ink</span
					>
				</h2>
			</div>
		</div>

		<!-- Image Grid -->
		<div class="container mx-auto px-6">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
				{#each atmosphereImages as image, i}
					<div
						class="group relative aspect-[3/4] cursor-pointer reveal-text cast-shadow {i === 1
							? 'md:mt-24'
							: ''}"
						style="transition-delay: {i * 0.1}s;"
					>
						<!-- Frame -->
						<div
							class="absolute inset-0 border border-ink-900/10 dark:border-paper-100/10 transform translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"
						></div>

						<div
							class="absolute inset-0 bg-white dark:bg-[#1a1615] p-3 transition-transform duration-500 group-hover:-translate-y-2"
						>
							<div
								class="w-full h-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000"
							>
								<img
									src={image.src}
									class="w-full h-full object-cover"
									alt={image.alt}
									loading="lazy"
								/>
								<div
									class="absolute inset-0 bg-cedar-900/20 mix-blend-multiply dark:bg-cedar-500/10 dark:mix-blend-overlay"
								></div>
							</div>
						</div>
						<div
							class="absolute -bottom-10 {i === 1
								? 'right-0'
								: i === 2
									? 'left-8'
									: 'left-0'} font-hand text-2xl text-cedar-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform {i === 1
								? 'rotate-3'
								: i === 2
									? '-rotate-2'
									: '-rotate-6'}"
						>
							{image.caption}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
