<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<svelte:head>
	<title>Home | Chloe | YA Author</title>
</svelte:head>

<div class="space-y-12">
	<Hero />
	<Mission />
	<FeaturedProjects />
	<Newsletter />
</div>
