<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import ExploreProjects from '$lib/components/ExploreProjects.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<svelte:head>
	<title>Chloe | YA Author</title>
</svelte:head>

<div class="space-y-12">
	<Hero />
	<Mission />
	<ExploreProjects />
	<Newsletter />
</div>