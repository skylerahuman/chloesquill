<script lang="ts">
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { theme } from '$lib/stores/theme';

	// State
	let isDragging = $state(false);
	let quillPos = $state({ x: 0, y: 0 });
	let canvas = $state<HTMLCanvasElement | null>(null);
	let ctx: CanvasRenderingContext2D | null = null;
	
	// Internal tracking
	interface Point { x: number; y: number; }
	let points: Point[] = [];
	let distanceDrawn = 0;
	let lastDragPos = { x: 0, y: 0 };

	// Physics for wiggle
	const quillRotation = spring(-10, {
		stiffness: 0.1,
		damping: 0.2
	});

	function getDrawColor() {
		return $theme === 'dark' ? '#FFFFFF' : '#000000';
	}

	function handleMouseDown(e: MouseEvent) {
		if (e.button !== 0) return;
		
		e.preventDefault();
		e.stopPropagation();

		isDragging = true;
		quillPos = { x: e.clientX, y: e.clientY };
		lastDragPos = { x: e.clientX, y: e.clientY };
		points = [{ x: e.clientX, y: e.clientY }];
		distanceDrawn = 0;
		
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		
		if (ctx && canvas) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		
		const { clientX, clientY } = e;
		const dx = clientX - lastDragPos.x;
		const dy = clientY - lastDragPos.y;
		
		quillPos = { x: clientX, y: clientY };
		points.push({ x: clientX, y: clientY });
		
		// Distance for depletion
		distanceDrawn += Math.hypot(dx, dy);

		// Wiggle animation: Pull top left/right based on movement
		const wiggle = (dy * 2.0) + (dx * 0.8);
		const clampedWiggle = Math.max(-25, Math.min(25, wiggle));
		quillRotation.set(-10 + clampedWiggle);

		if (ctx && points.length > 2) {
			const inkLimit = 1500;
			const fadeRange = 1000;
			let opacity = 1;
			let width = 3;

			if (distanceDrawn > inkLimit) {
				const factor = Math.max(0, 1 - (distanceDrawn - inkLimit) / fadeRange);
				opacity = Math.pow(factor, 0.7); // Slower initial fade
				width = 0.8 + 2.2 * factor; // Taper to 0.8px
				
				// Scratchy ink effect: skip some segments when running low
				const skipProbability = 0.6 * (1 - factor);
				if (Math.random() < skipProbability) return;
			}

			ctx.save();
			ctx.beginPath();
			ctx.lineCap = 'butt'; // ELIMINATES JOIN DOTS
			ctx.lineJoin = 'round';
			ctx.lineWidth = width * (0.9 + Math.random() * 0.2); // Jitter width for organic feel
			ctx.strokeStyle = getDrawColor();
			ctx.globalAlpha = opacity;

			const p1 = points[points.length - 3];
			const p2 = points[points.length - 2];
			const p3 = points[points.length - 1];

			const mid1 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
			const mid2 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 };

			ctx.moveTo(mid1.x, mid1.y);
			ctx.quadraticCurveTo(p2.x, p2.y, mid2.x, mid2.y);
			ctx.stroke();
			ctx.restore();
		}

		lastDragPos = { x: clientX, y: clientY };
	}

	function handleMouseUp() {
		isDragging = false;
		points = [];
		
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
		quillRotation.set(-10);

		if (ctx && canvas) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}

	function resizeCanvas() {
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}

	$effect(() => {
		if (isDragging && canvas) {
			ctx = canvas.getContext('2d');
			resizeCanvas();
			
			const handleResize = () => resizeCanvas();
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	});

	// Global style overrides
	$effect(() => {
		if (isDragging) {
			const style = document.createElement('style');
			style.id = 'drag-mode-styles';
			style.innerHTML = `
				* { 
					cursor: none !important; 
					user-select: none !important; 
					-webkit-user-drag: none !important;
				}
			`;
			document.head.appendChild(style);
			
			return () => {
				const existingStyle = document.getElementById('drag-mode-styles');
				if (existingStyle) existingStyle.remove();
			};
		}
	});
</script>

<!-- Static Quill (Trigger) -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
	class="relative inline-flex items-center justify-center transition-transform duration-300 hover:text-cedar-500 hover:rotate-[-10deg] cursor-pointer {isDragging ? 'pointer-events-none' : ''}"
	onmousedown={handleMouseDown}
	draggable="false"
	role="button"
	tabindex="0"
	aria-label="Interactive Quill"
>
	<svg
		viewBox="0 0 331.331 331.331"
		class="w-8 h-8 fill-current transition-opacity duration-100 {isDragging ? 'opacity-0' : 'opacity-100'}"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path d="M30.421,317.462l4.422-17.661l-12.194-4.814l-8.376,13.804c0,0,4.618,12.526-0.511,22.539 C13.766,331.331,20.184,320.399,30.421,317.462z M22.229,309.358c1.501-0.615,3.231,0.087,3.851,1.561 c0.625,1.474-0.087,3.171-1.588,3.786c-1.501,0.615-3.231-0.087-3.851-1.561C20.01,311.664,20.723,309.967,22.229,309.358z"/>
			<path d="M158.353,112.621c-35.115,28.8-81.086,88.124-120.073,157.423l-0.022-0.027l-6.815,12.026 l7.267,2.796l3.84-10.117c20.799-37.491,77.224-135.4,180.397-200.451c0,0,38.411-22.877,76.256-54.516 c-9.214,7.702-27.391,17.356-37.247,23.584C236.088,59.683,204.166,75.043,158.353,112.621z"/>
			<path d="M33.2,215.365c-7.985,28.223-7.528,49.718-4.438,55.625h4.83 c13.337-27.625,77.572-127.693,117.554-159.016c41.424-32.455,73.378-51.339,100.253-65.111 c9.437-4.835,19.118-11.384,27.848-17.949c10.601-8.36,21.348-17.302,30.758-26.053L282.728,20.75L294.89,2.148L271.67,25.759 L286.78,0c-35.746,3.225-68.918,21.109-68.918,21.109c-13.271,15.741-23.959,40.782-23.959,40.782 c-0.37-12.521,8.11-31.481,8.11-31.481c-6.266,2.861-30.073,16.459-30.073,16.459c-11.645,9.66-15.262,35.06-15.262,35.06 c-2.214-10.019,5.526-29.333,5.526-29.333c-33.543,19.32-57.502,52.231-57.502,52.231c-16.584,32.553-2.948,57.953-8.11,51.872 c-5.162-6.081-4.052-28.261-4.052-28.261c-35.017,33.63-38.699,49.724-38.699,49.724c-5.896,14.31-11.058,52.59-11.058,52.59 c-3.318-3.579,0-23.611,0-23.611c-8.479,17.889-4.422,34.701-4.422,34.701C34.309,240.407,33.2,215.365,33.2,215.365z" />
			<path d="M310.01,14.191c0,0-13.483,13.065-30.758,26.053c-27.081,21.359-53.156,38.819-53.156,38.819 C123.945,139.425,67.025,237.932,48.212,271.708h10.002c3.535-2.834,8.844-4.971,31.014-11.389 c28.011-8.11,44.72-25.041,44.72-25.041s-25.553,14.31-37.595,12.88s-28.223,3.1-28.223,3.1s-6.179-2.861,24.291-7.392 s80.596-38.634,80.596-38.634s-19.167,7.87-28.011,7.152c-8.844-0.718-30.714,0-30.714,0c14.495-3.34,28.011-1.43,50.126-9.779 c22.115-8.349,20.886-7.631,20.886-7.631c25.063-8.349,35.474-34.342,35.474-34.342c-4.335,1.67-37.443,5.722-51.176,1.67 c-13.734-4.052-37.132,0-37.132,0c22.115-7.392,27.032-4.052,32.433-4.291c5.406-0.239,22.855,1.191,57.502-10.731 s44.475-26.711,44.475-26.711l-23.366,3.122c15.257-2.567,32.455-12.662,32.455-12.662c-10.568,2.861-27.032,4.291-27.032,4.291 c19.412-4.291,30.225-10.253,30.225-10.253c18.183-13.832,22.36-34.342,22.36-34.342c-25.803,8.822-46.194,4.77-46.194,4.77 c35.387-2.382,45.215-11.449,50.126-13.592c4.917-2.148,6.94-11.03,6.94-11.03c-17.878,6.44-38.15,7.511-38.15,7.511 c21.93-3.399,40.722-14.49,40.722-14.49V32.792c-8.479,4.83-23.399,8.588-23.399,8.588l23.219-15.023 C316.091,18.841,310.01,14.191,310.01,14.191z" />
			<polygon points="23.551,290.571 37.361,296.103 39.933,289.989 26.124,284.458" />
			<path d="M177.036,285.458c-45.628,21.936-89.462,36.888-147.758,38.846c-5.439,0.185-5.466,5.624,0,5.439 c52.15-1.751,95.543-12.961,137.391-32.575c46.618-21.854,89.435-40.167,147.828-46.39c5.385-0.577,3.095-5.814-2.252-5.243 C260.531,251.051,218.514,265.519,177.036,285.458z" />
		</g>
	</svg>
</div>

<!-- Draggable Overlay -->
{#if isDragging}
	<div class="fixed inset-0 z-[9999] pointer-events-none select-none">
		<!-- Canvas for drawing traces -->
		<canvas
			bind:this={canvas}
			class="absolute inset-0 block w-full h-full"
		></canvas>
		
		<!-- Floating Quill -->
		<div
			class="absolute text-cedar-500 will-change-transform pointer-events-none"
			style="
				left: {quillPos.x}px;
				top: {quillPos.y}px;
				/* Alignment: Nib (x=30, y=317 of 331) at the cursor position */
				transform: translate(-9.18%, -95.9%) rotate({$quillRotation}deg);
				transform-origin: 9.18% 95.9%;
			"
			transition:fade={{ duration: 100 }}
		>
			<svg
				viewBox="0 0 331.331 331.331"
				class="w-16 h-16 fill-current"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path style="fill:currentColor" d="m30.421 317.462 4.422-17.661-12.194-4.814-8.376 13.804s4.618 12.526-.511 22.539c.004.001 6.422-10.931 16.659-13.868m-8.192-8.104c1.501-.615 3.231.087 3.851 1.561.625 1.474-.087 3.171-1.588 3.786s-3.231-.087-3.851-1.561c-.631-1.48.082-3.177 1.588-3.786m136.124-196.737c-35.115 28.8-81.086 88.124-120.073 157.423l-.022-.027-6.815 12.026 7.267 2.796 3.84-10.117c20.799-37.491 77.224-135.4 180.397-200.451 0 0 38.411-22.877 76.256-54.516-9.214 7.702-27.391 17.356-37.247 23.584-25.868 16.344-57.79 31.704-103.603 69.282"/>
				<path style="fill:currentColor" d="M33.2 215.365c-7.985 28.223-7.528 49.718-4.438 55.625h4.83c13.337-27.625 77.572-127.693 117.554-159.016 41.424-32.455 73.378-51.339 100.253-65.111 9.437-4.835 19.118-11.384 27.848-17.949 10.601-8.36 21.348-17.302 30.758-26.053L282.728 20.75 294.89 2.148l-23.22 23.611L286.78 0c-35.746 3.225-68.918 21.109-68.918 21.109-13.271 15.741-23.959 40.782-23.959 40.782-.37-12.521 8.11-31.481 8.11-31.481-6.266 2.861-30.073 16.459-30.073 16.459-11.645 9.66-15.262 35.06-15.262 35.06-2.214-10.019 5.526-29.333 5.526-29.333-33.543 19.32-57.502 52.231-57.502 52.231-16.584 32.553-2.948 57.953-8.11 51.872s-4.052-28.261-4.052-28.261c-35.017 33.63-38.699 49.724-38.699 49.724-5.896 14.31-11.058 52.59-11.058 52.59-3.318-3.579 0-23.611 0-23.611-8.479 17.889-4.422 34.701-4.422 34.701-4.052-1.435-5.161-26.477-5.161-26.477"/>
				<path style="fill:currentColor" d="M310.01 14.191s-13.483 13.065-30.758 26.053c-27.081 21.359-53.156 38.819-53.156 38.819C123.945 139.425 67.025 237.932 48.212 271.708h10.002c3.535-2.834 8.844-4.971 31.014-11.389 28.011-8.11 44.72-25.041 44.72-25.041s-25.553,14.31-37.595,12.88-28.223 3.1-28.223 3.1-6.179-2.861 24.291-7.392 80.596-38.634 80.596-38.634-19.167 7.87-28.011 7.152-30.714 0-30.714 0c14.495-3.34 28.011-1.43 50.126-9.779s20.886-7.631 20.886-7.631c25.063-8.349 35.474-34.342 35.474-34.342-4.335 1.67-37.443 5.722-51.176 1.67s-37.132 0-37.132 0c22.115-7.392 27.032-4.052 32.433-4.291 5.406-.239 22.855 1.191 57.502-10.731s44.475-26.711 44.475-26.711l-23.366 3.122c15.257-2.567 32.455-12.662 32.455-12.662-10.568 2.861-27.032 4.291-27.032 4.291 19.412-4.291 30.225-10.253 30.225-10.253 18.183-13.832 22.36-34.342 22.36-34.342-25.803 8.822-46.194 4.77-46.194 4.77 35.387-2.382 45.215-11.449 50.126-13.592 4.917-2.148 6.94-11.03 6.94-11.03-17.878 6.44-38.15 7.511-38.15 7.511 21.93-3.399 40.722-14.49 40.722-14.49V32.792c-8.479 4.83-23.399 8.588-23.399 8.588l23.219-15.023c1.305-7.516-4.776-12.166-4.776-12.166M23.551 290.571l13.81 5.532 2.572-6.114-13.809-5.531z"/>
			</svg>
		</div>
	</div>
{/if}
