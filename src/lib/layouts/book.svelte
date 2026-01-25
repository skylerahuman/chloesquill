<script>
	export let frontmatter;
</script>

<article class="prose dark:prose-invert">
	<h1>{frontmatter.title}</h1>
	<p class="text-sm text-warm-cedar">{frontmatter.status}</p>
	<slot />
</article>
