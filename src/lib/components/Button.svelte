<script lang="ts">
	interface Props {
		label: string;
		onClick?: (event: MouseEvent) => void;
	}
	let { label, onClick: handleClick }: Props = $props();
</script>

<button
	class="bg-warm-cedar text-white py-2 px-4 rounded hover:bg-opacity-80"
	onclick={handleClick}
>
	{label}
</button>
