<script lang="ts">
	import type { HeatmapGrid, HeatmapCell, IntensityLevel } from '$lib/utils/tracker';

	interface Props {
		grid: HeatmapGrid;
	}

	let { grid }: Props = $props();

	/** Forest-green intensity palette (on parchment card). */
	const LEVELS: IntensityLevel[] = [0, 1, 2, 3, 4];
	const COLORS: Record<IntensityLevel, string> = {
		0: '#e6dfd1', // parchment-300 — empty cell
		1: '#c0d8c6', // forest-200
		2: '#9bc3a5', // forest-300
		3: '#76ae83', // forest-400
		4: '#2C5530' // forest-500 — peak / darkest
	};

	const CELL = 12;
	const GAP = 3;
	const STEP = CELL + GAP;

	let totalCols = $derived(grid.weeks.length);
	let svgWidth = $derived(totalCols * STEP - GAP);

	const MONTH_LABEL_Y = -8;
	const WEEKDAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
	const WEEKDAY_X = -30;

	function cellTitle(cell: HeatmapCell): string {
		if (cell.future) return `${cell.date} (future)`;
		if (cell.seconds <= 0) return `${cell.date}: no time tracked`;
		const h = Math.floor(cell.seconds / 3600);
		const m = Math.floor((cell.seconds % 3600) / 60);
		const parts: string[] = [];
		if (h > 0) parts.push(`${h}h`);
		if (m > 0) parts.push(`${m}m`);
		if (parts.length === 0) parts.push('<1m');
		return `${cell.date}: ${parts.join(' ')} tracked`;
	}

	let monthTexts = $derived(
		grid.monthLabels.map((ml) => {
			const x = ml.weekIndex * STEP;
			return { x, label: ml.label };
		})
	);
</script>

<div class="overflow-x-auto pb-2">
	<div class="inline-block min-w-fit">
		<svg
			class="block"
			width={svgWidth}
			height={7 * STEP}
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Writing heat map — each cell represents a day's tracked time"
		>
			<!-- Month labels -->
			{#each monthTexts as mt}
				<text
					x={mt.x}
					y={MONTH_LABEL_Y}
					class="fill-espresso-500/70"
					font-size="10"
					font-family="Montserrat, Inter, sans-serif"
				>
					{mt.label}
				</text>
			{/each}

			<!-- Weekday labels (left column) -->
			{#each WEEKDAY_LABELS as label, i}
				{#if label}
					<text
						x={WEEKDAY_X}
						y={i * STEP + 10}
						class="fill-espresso-500/70"
						font-size="10"
						font-family="Montserrat, Inter, sans-serif"
						text-anchor="end"
					>
						{label}
					</text>
				{/if}
			{/each}

			<!-- Cells -->
			{#each grid.weeks as week, w}
				{#each week as cell, dow}
					<g transform="translate({w * STEP}, {dow * STEP})">
						<rect
							width={CELL}
							height={CELL}
							rx={2}
							fill={COLORS[cell.level]}
							class={cell.future ? 'opacity-30' : ''}
						>
							<title>{cellTitle(cell)}</title>
						</rect>
					</g>
				{/each}
			{/each}
		</svg>

		<!-- Legend -->
		<div class="flex items-center gap-1.5 mt-2 text-[10px] font-sans text-espresso-500/70 tracking-wider uppercase">
			<span>Less</span>
			{#each LEVELS as level}
				<span
					class="inline-block w-3 h-3 rounded-sm"
					style="background-color: {COLORS[level]}"
				></span>
			{/each}
			<span>More</span>
		</div>

		<!-- Stats -->
		<div class="mt-3 flex gap-6 text-[10px] font-sans text-espresso-500/70 tracking-wider uppercase">
			<span
				>{grid.totalDays} day{grid.totalDays !== 1 ? 's' : ''} tracked</span
			>
			{#if grid.peak > 0}
				<span
					>Peak: {Math.floor(grid.peak / 3600)}h
					{Math.floor((grid.peak % 3600) / 60)}m</span
				>
			{/if}
		</div>
	</div>
</div>
