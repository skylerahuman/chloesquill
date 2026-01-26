<!-- AMBIENT FOOTER EFFECTS (Fire / Steam) -->
<div class="particle-container">
	<!-- Day Mode Steam (Coffee Cup - Bottom Left) -->
	<div class="hidden dark:hidden lg:block absolute bottom-0 left-0 w-64 h-64 pointer-events-none">
		<div
			class="steam-puff w-32 h-32 left-[10%] bottom-[-20%] animate-[rise-steam_4s_ease-in_infinite_0s] opacity-60"
		></div>
		<div
			class="steam-puff w-40 h-40 left-[25%] bottom-[-10%] animate-[rise-steam_6s_ease-in_infinite_1.5s] opacity-50"
		></div>
		<div
			class="steam-puff w-24 h-24 left-[15%] bottom-[-30%] animate-[rise-steam_5s_ease-in_infinite_2.5s] opacity-70"
		></div>
		<div
			class="steam-puff w-36 h-36 left-[30%] bottom-[-15%] animate-[rise-steam_7s_ease-in_infinite_3.5s] opacity-40"
		></div>
	</div>

	<!-- Night Mode Fire (Alive & Glowing) -->
	<div class="hidden dark:block w-full h-full relative">
		<!-- Active Embers -->
		<div
			class="fire-ember w-24 h-24 left-[10%] animate-[rise-fire_3s_ease-out_infinite_0s] bg-orange-600 opacity-80"
		></div>
		<div
			class="fire-ember w-32 h-32 left-[20%] animate-[rise-fire_4s_ease-out_infinite_1.5s] bg-red-600 opacity-70"
		></div>
		<div
			class="fire-ember w-40 h-40 left-[35%] animate-[rise-fire_5s_ease-out_infinite_0.5s] bg-cedar-500 opacity-60"
		></div>
		<div
			class="fire-ember w-28 h-28 left-[50%] animate-[rise-fire_3.5s_ease-out_infinite_2.2s] bg-orange-500 opacity-80"
		></div>
		<div
			class="fire-ember w-48 h-48 left-[65%] animate-[rise-fire_6s_ease-out_infinite_1.0s] bg-red-700 opacity-50"
		></div>
		<div
			class="fire-ember w-36 h-36 left-[80%] animate-[rise-fire_4.5s_ease-out_infinite_3.0s] bg-cedar-600 opacity-70"
		></div>
		<div
			class="fire-ember w-20 h-20 left-[90%] animate-[rise-fire_3.2s_ease-out_infinite_0.8s] bg-orange-400 opacity-80"
		></div>

		<!-- Intensified Hearth Glow -->
		<div
			class="absolute bottom-[-80px] left-0 w-full h-[250px] bg-gradient-to-t from-cedar-900/80 via-cedar-800/20 to-transparent blur-2xl animate-pulse"
			style="animation-duration: 4s;"
		></div>
	</div>
</div>
