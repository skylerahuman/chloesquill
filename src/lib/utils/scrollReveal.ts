export function setupScrollReveal(
	selectors = '.reveal-text, .reveal-image',
	options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
) {
	if (typeof window === 'undefined') return () => {};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			}
		});
	}, options);

	document.querySelectorAll(selectors).forEach((el) => {
		observer.observe(el);
	});

	return () => {
		observer.disconnect();
	};
}
