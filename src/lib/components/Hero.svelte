<section class="relative overflow-hidden min-h-screen flex items-center justify-center">
	<!-- Background Typography (Texture) -->
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
	>
		<h1
			class="text-[25vw] font-serif font-bold leading-none text-ink-900 opacity-[0.02] dark:opacity-[0.04] mix-blend-multiply dark:mix-blend-overlay transition-opacity duration-1000"
		>
			STORY
		</h1>
	</div>

	<!-- Background Image with Parallax -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10 transition-opacity duration-1000"
		style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb9FPg9W7at10TN6iZxLRtvVzAx4Yho2xR-JbvdBuVnk0fSrHRsC_qdl70XxiAaknWY0b7sSLKR3ot-H_CZ8OLEL6Zf4-YIc7x_-0-RTuq8v3kMHe4Umtj4DU8qMb0tsObqDh1SQs-rgzewIa5ARww_hsvyYLAHiYQdIhizqQK4vS4pYXlLrUeTDKLPqjUK-73eyw4MGRDZx3Xb7lZrmHy03CKrepgK3yrbT8CwD9B6j_9ruh7dvFyFqzJwquGd-clubHrtzqqAAs'); filter: sepia(0.3) contrast(1.1);"
	></div>

	<!-- Content -->
	<div class="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto cast-shadow">
		<!-- Eyebrow -->
		<div class="mb-8 reveal-text">
			<span
				class="font-sans text-xs tracking-[0.3em] text-cedar-600 dark:text-cedar-500 uppercase block mb-2 font-bold"
				>Young Adult Fiction</span
			>
			<div
				class="w-16 h-[1px] bg-cedar-500 mx-auto opacity-50 shadow-[0_0_10px_rgba(217,78,24,0.5)]"
			></div>
		</div>

		<!-- Main Headline -->
		<h1
			class="text-5xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight tracking-tight font-headline text-ink-900 dark:text-paper-100 mb-6 text-depth reveal-text"
		>
			Where <span class="text-cedar-600 dark:text-cedar-500 italic">Faith</span> Meets
			<br />Regency Romance
		</h1>

		<!-- Subheadline -->
		<p
			class="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-ink-700 dark:text-paper-300 max-w-3xl mx-auto mb-12 reveal-text text-depth"
			style="transition-delay: 0.2s;"
		>
			Crafting wholesome romance novels inspired by Jane Austen <br class="hidden md:block" />
			and a Christian worldview.
		</p>

		<!-- CTA Buttons -->
		<div
			class="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-text"
			style="transition-delay: 0.4s;"
		>
			<a
				href="/books"
				class="group px-10 py-4 bg-cedar-600 hover:bg-cedar-700 text-white font-sans font-bold text-sm tracking-widest uppercase rounded-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
			>
				<span class="relative z-10">Explore Books</span>
				<div
					class="absolute inset-0 bg-cedar-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
				></div>
			</a>
			<a
				href="/about"
				class="px-10 py-4 bg-transparent border-2 border-cedar-600 dark:border-cedar-500 text-cedar-600 dark:text-cedar-500 hover:bg-cedar-600 hover:text-white dark:hover:text-white font-sans font-bold text-sm tracking-widest uppercase rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300"
			>
				Meet Chloe
			</a>
		</div>

		<!-- Decorative Element -->
		<div class="mt-16 reveal-text" style="transition-delay: 0.6s;">
			<div class="flex items-center justify-center space-x-4">
				<div class="w-12 h-[1px] bg-cedar-500/30"></div>
				<span
					class="w-2 h-2 rounded-full bg-cedar-500 shadow-[0_0_8px_rgba(217,78,24,0.8)] animate-pulse"
				></span>
				<div class="w-12 h-[1px] bg-cedar-500/30"></div>
			</div>
		</div>
	</div>
</section>

<script>
	import { onMount } from 'svelte';

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

		document.querySelectorAll('.reveal-text').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>
