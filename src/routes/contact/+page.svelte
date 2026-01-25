<svelte:head>
	<title>Contact | Chloe | YA Author</title>
</svelte:head>

<div class="space-y-12">
	<section class="text-center">
		<h1 class="text-4xl font-bold font-serif">Contact</h1>
		<p class="mt-4">
			I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as
			I can.
		</p>
	</section>

	<section class="max-w-xl mx-auto">
		<form class="space-y-4">
			<div>
				<label for="name" class="block mb-1">Name</label>
				<input type="text" id="name" class="w-full p-2 border border-warm-cedar rounded" />
			</div>
			<div>
				<label for="email" class="block mb-1">Email</label>
				<input type="email" id="email" class="w-full p-2 border border-warm-cedar rounded" />
			</div>
			<div>
				<label for="message" class="block mb-1">Message</label>
				<textarea id="message" rows="5" class="w-full p-2 border border-warm-cedar rounded"
				></textarea>
			</div>
			<div class="text-center">
				<button type="submit" class="bg-warm-cedar text-white py-2 px-6 rounded hover:bg-opacity-80"
					>Submit</button
				>
			</div>
		</form>
	</section>
</div>
