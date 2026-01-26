<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'outline';
	type Size = 'sm' | 'md' | 'lg';

	interface Props {
		label: string;
		onClick?: (event: MouseEvent) => void;
		variant?: Variant;
		size?: Size;
		class?: string;
	}

	let {
		label,
		onClick: handleClick,
		variant = 'primary',
		size = 'md',
		class: className = ''
	}: Props = $props();

	const baseClasses =
		'font-sans font-medium rounded-lg transition-all duration-250 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary:
			'bg-cedar-500 text-parchment-50 hover:bg-cedar-600 active:bg-cedar-700 focus:ring-cedar-400 shadow-sm hover:shadow-md',
		secondary:
			'bg-forest-500 text-parchment-50 hover:bg-forest-600 active:bg-forest-700 focus:ring-forest-400 shadow-sm hover:shadow-md',
		outline:
			'bg-transparent border-2 border-cedar-500 text-cedar-700 hover:bg-cedar-50 active:bg-cedar-100 focus:ring-cedar-400 dark:text-cedar-300 dark:border-cedar-400 dark:hover:bg-cedar-950'
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	let buttonClasses = $derived(
		`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
	);
</script>

<button class={buttonClasses} onclick={handleClick}>
	{label}
</button>
