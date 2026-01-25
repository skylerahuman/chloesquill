<script lang="ts">
	interface Props {
		title: string;
		category: string;
		excerpt: string;
		imageUrl: string;
	}
	let { title, category, excerpt, imageUrl }: Props = $props();

	function slugify(text: string) {
		return text
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/[^\w-]+/g, '') // Remove all non-word chars
			.replace(/--+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}
</script>

<div class="flex flex-col md:flex-row gap-8 items-center border-b border-warm-cedar pb-8">
	<div
		class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
		style="background-image: url('{imageUrl}');"
	></div>
	<div class="md:w-2/3">
		<h3 class="text-2xl font-bold font-serif">{title}</h3>
		<p class="text-sm text-warm-cedar">{category}</p>
		<p>{excerpt}</p>
		<a
			href="/journal/{slugify(title)}"
			data-sveltekit-preload-data="hover"
			class="text-warm-cedar hover:underline">Read More</a
		>
	</div>
</div>
