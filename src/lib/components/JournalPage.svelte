<script lang="ts">
	// Presentational component
</script>

<div class="w-full">
	<div
		class="bg-parchment-200 dark:bg-forest-900 text-espresso-700 dark:text-parchment-100 min-h-screen"
	>
		<div class="container mx-auto px-6 md:px-8 py-12">
			<div class="flex flex-col max-w-6xl mx-auto">
				<div class="mb-6">
					<h1
						class="text-4xl md:text-5xl font-bold font-serif leading-tight text-espresso-900 dark:text-parchment-50 mb-3"
					>
						Chloe's Journal
					</h1>
					<p
						class="text-espresso-600 dark:text-parchment-300 text-base font-normal leading-normal max-w-2xl"
					>
						A collection of thoughts, reflections, and stories from my life as a YA author.
					</p>
				</div>

				<div class="flex gap-2 pb-6 flex-wrap">
					<button
						class="px-4 py-2 rounded-md bg-cedar-500 dark:bg-cedar-600 text-white text-sm font-medium hover:bg-cedar-600 dark:hover:bg-cedar-700 transition-colors"
					>
						All
					</button>
					<button
						class="px-4 py-2 rounded-md bg-parchment-100 dark:bg-forest-800 text-espresso-700 dark:text-parchment-200 text-sm font-medium hover:bg-parchment-300/50 dark:hover:bg-forest-700 transition-colors border border-parchment-300 dark:border-forest-600"
					>
						Literary Reflections
					</button>
					<button
						class="px-4 py-2 rounded-md bg-parchment-100 dark:bg-forest-800 text-espresso-700 dark:text-parchment-200 text-sm font-medium hover:bg-parchment-300/50 dark:hover:bg-forest-700 transition-colors border border-parchment-300 dark:border-forest-600"
					>
						Life &amp; Travel
					</button>
					<button
						class="px-4 py-2 rounded-md bg-parchment-100 dark:bg-forest-800 text-espresso-700 dark:text-parchment-200 text-sm font-medium hover:bg-parchment-300/50 dark:hover:bg-forest-700 transition-colors border border-parchment-300 dark:border-forest-600"
					>
						Faith &amp; Perspective
					</button>
				</div>

				<div class="space-y-6">
					<!-- Journal Entry 1 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										The Art of Storytelling: Crafting Characters with Depth
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Literary Reflections
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										Exploring the nuances of character development, drawing inspiration from classic
										literature and personal experiences. To create characters that breathe, we must
										look beyond the archetype...
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlLYRjXfyEi3b2g58OHDKbJlMNQ6KzaASxm-6LE-7glI83Z5mcB70Jl7VQNFF2F9BT5RomCepuibARD4LHRK_EFzUzYy1nHSchDSRGMWLIuU_edC1ONQ7HvZ-UlVtsQFUZmg9ejG0k8H6bdf3AfEqT32SAdAudcZOxW782rkhKMezZAekQCFUAnBKdwUZJ4jywBLIePzhg8Atps1dJsKQ5hWDrfoBfyKu-xwmCOzt7UX7nxl9ZUXdt9aZ68kfRCUMt3j8ioSqvnBE');"
							></div>
						</div>
					</div>

					<!-- Journal Entry 2 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										Wanderlust and Writing: A Journey Through the English Countryside
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Life &amp; Travel
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										Reflections on a recent trip to the English countryside, exploring the
										landscapes that inspired some of my favorite stories. The rolling hills of
										Derbyshire whispered secrets of old...
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdncRu69pkffgmfL4iMDsaeb0jFBuhG2FS9zFeA5IRvPsaw6Z6_TsJs2IVobWyBDCTUJiGjPvjz3x7AadN8aWpVtyKfyOoKguevrdkXhxuCbJ6ZDVYeiKThJDc0ejZfWQJS4jKMKhQ4obdf2bUVhK-hz6TTOu2Qh84Euy6cC41OyDMtmBCFwA_YtprtOBE7kAkUYPRgPuWRNxduoI39gwNVGX3sDWc48mdWqcC2h0X2eEfrnlzgOiXlNSliT2ao-E8paTKFs7XYvo');"
							></div>
						</div>
					</div>

					<!-- Journal Entry 3 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										Finding Faith in Fiction: Weaving Spiritual Themes into YA Romance
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Faith &amp; Perspective
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										Discussing the role of faith in my writing, and how I integrate spiritual themes
										into my stories in a meaningful way without being preachy...
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuASunyG8__jhXG0urZNkiZPsQ4wTvIMkQmXEKcGlHscGFd1If2DgQC_trKQTKSJg7JH9gSEBSGhobpULlsysbnvU7BOSmP1V6s7bDi9S7wHACkJUVgH1gywXkWMV8ubm2HZvLoV9tlJjg0vjgW6I8bB-BIQsuBhQdfpWQ53GkW6pUbtWPCEm-TU-549expyZ9_JTtjDiSXb2SPWHyu1XCx0OTFRWxLjdvgWvi2ig3hOl0HioJfCfxQU2ISH9Q1EQAZPHseQWDmpRfw');"
							></div>
						</div>
					</div>

					<!-- Journal Entry 4 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										The Magic of First Drafts: Embracing Imperfection
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Literary Reflections
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										Sharing my thoughts on the writing process, and the importance of embracing
										imperfection in the first draft. Let the ink flow freely...
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuALIrivp-puBYQZNk0Cl5YHvEDfIlHa2Q9ZxFykz_o4g6UYDR47aYvbAnjfIB9EiqQ9nHI2N1jlUeIu1dHgbELN9p-oy40axYs6Lbr-wXl-crid2h6c816Ol8s_RHi2y6xisddll9ABMhFdZCJEX1-Z4e9BjqL54y0ZRU3eGb2dzVPc4JPfz2YJqw99H3VFCfrYeBDC1vjSSH4AOEoUkfW4qHo6K5WC8RQOySgoQOCBXgbU6C6uarSTCKzU55e0AZNbOQ038eFRAdA');"
							></div>
						</div>
					</div>

					<!-- Journal Entry 5 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										Exploring Historical Settings: Research and Inspiration
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Literary Reflections
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										A look into the research process for my historical novels, and the inspiration I
										draw from different time periods.
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuACN1-0nakYG-NxUNUppaUKgbSqFbZ0Sr8pUAYawje_FCcKp0-UAze3G1MDBhZwgls5I8O_MGV-WTDS8Zx5_2CjI43SdGeX30-0wvgXIfmdZcSPHYYbKKCfBZfIiukSnSPzxNUVSa8JiuKKz7enktyAuVPD7v3voCaaZsnKejVLICl2amaCgYGJHvXd7zE2vhkQ2aDxzmJ4D8YQuGrmRSeVQwXh2ZvzCSnS9LopOTZ3GxBaXOSsnoR2YVXNWI_7WDUyNnZqtWFuVn0');"
							></div>
						</div>
					</div>

					<!-- Journal Entry 6 -->
					<div
						class="bg-parchment-100 dark:bg-forest-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-parchment-300 dark:border-forest-700"
					>
						<div class="flex flex-col md:flex-row gap-6">
							<div class="flex-1 flex flex-col justify-between order-2 md:order-1">
								<div class="flex flex-col gap-2">
									<h2
										class="text-xl md:text-2xl font-bold font-serif text-espresso-900 dark:text-parchment-50 leading-tight"
									>
										The Power of Community: Connecting with Readers
									</h2>
									<p class="text-cedar-600 dark:text-cedar-300 text-sm font-medium">
										Life &amp; Travel
									</p>
									<p
										class="text-espresso-600 dark:text-parchment-200 text-base leading-relaxed mt-2"
									>
										Reflecting on the importance of community in the writing world, and the
										connections I've made with readers and fellow authors.
									</p>
								</div>
								<div class="mt-4">
									<button
										class="text-cedar-600 dark:text-cedar-300 text-sm font-bold hover:underline decoration-2 underline-offset-4"
									>
										Read More →
									</button>
								</div>
							</div>
							<div
								class="w-full md:w-1/3 aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-sm order-1 md:order-2"
								style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdcB9a5ln74owp384_kawnvpSAQgPvGoyKYOr6pUDQmLar7rxcwLeRdjJd_ogMlAyqqob0tlGKWMvODV3kj-7fkAwgXrvQfmdIkWLw8R_DSJvj6L5GTG-zW_BbTT7Uzsg6PJ3C5g5EqW7I-LLvq8meJw6vLOfEsduU94Q90K3yzqHp2anxe2qjXL4XsMze5npmJ2HOL3SnSLqaKTSuhxxWOxHErd5I3f2B1H29MG7GlyJ5e5fvuOdTP2cYIlUToL2hxz1lw-l6PZw');"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
