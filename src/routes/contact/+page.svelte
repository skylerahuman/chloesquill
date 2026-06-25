<svelte:head>
	<title>Contact | Chloe | YA Author</title>
</svelte:head>

<div class="max-w-xl mx-auto px-6 py-24 md:py-32">
	<span
		class="block text-center font-sans text-xs tracking-[0.3em] text-rose-600 dark:text-rose-400 uppercase font-bold mb-3"
		>Say Hello</span
	>
	<h1 class="text-4xl md:text-5xl font-serif font-bold text-center text-espresso-900 dark:text-parchment-50 mb-4">
		Write to Chloe
	</h1>
	<p class="text-center text-espresso-700 dark:text-parchment-200 mb-10">
		Notes from readers are the best part of the work.
	</p>

	<form class="space-y-5">
		<div>
			<label for="name" class="block mb-2 font-sans text-xs tracking-widest uppercase text-espresso-700 dark:text-parchment-200"
				>Name</label
			>
			<input
				type="text"
				id="name"
				class="w-full p-3 bg-parchment-50 dark:bg-forest-900 border border-espresso-300 dark:border-forest-600 rounded-sm text-espresso-800 dark:text-parchment-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
			/>
		</div>
		<div>
			<label
				for="email"
				class="block mb-2 font-sans text-xs tracking-widest uppercase text-espresso-700 dark:text-parchment-200"
				>Email</label
			>
			<input
				type="email"
				id="email"
				class="w-full p-3 bg-parchment-50 dark:bg-forest-900 border border-espresso-300 dark:border-forest-600 rounded-sm text-espresso-800 dark:text-parchment-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
			/>
		</div>
		<div>
			<label
				for="message"
				class="block mb-2 font-sans text-xs tracking-widest uppercase text-espresso-700 dark:text-parchment-200"
				>Message</label
			>
			<textarea
				id="message"
				rows="6"
				class="w-full p-3 bg-parchment-50 dark:bg-forest-900 border border-espresso-300 dark:border-forest-600 rounded-sm text-espresso-800 dark:text-parchment-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
			></textarea>
		</div>
		<div class="text-center pt-2">
			<button
				type="submit"
				class="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-parchment-50 font-sans font-bold text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
			>
				Send
			</button>
		</div>
	</form>
</div>