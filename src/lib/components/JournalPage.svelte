<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let currentTheme = 'light';

	onMount(() => {
		const unsubscribe = theme.subscribe((value) => {
			currentTheme = value;
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<div class:dark={currentTheme === 'dark'}>
	<div class="bg-[#fcf9f8] dark:bg-[#141f18] text-[#1d100c] dark:text-white">
		<div class="px-40 flex flex-1 justify-center py-5">
			<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
				<div class="flex flex-wrap justify-between gap-3 p-4">
					<div class="flex min-w-72 flex-col gap-3">
						<h1 class="tracking-light text-[32px] font-bold leading-tight">Chloe's Journal</h1>
						<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
							A collection of thoughts, reflections, and stories from my life as a YA author.
						</p>
					</div>
				</div>
				<div class="flex gap-3 p-3 flex-wrap pr-4">
					<div
						class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f4e9e6] dark:bg-[#294233] pl-4 pr-4"
					>
						<p class="text-sm font-medium leading-normal">All</p>
					</div>
					<div
						class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f4e9e6] dark:bg-[#294233] pl-4 pr-4"
					>
						<p class="text-sm font-medium leading-normal">Literary Reflections</p>
					</div>
					<div
						class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f4e9e6] dark:bg-[#294233] pl-4 pr-4"
					>
						<p class="text-sm font-medium leading-normal">Life &amp; Travel</p>
					</div>
					<div
						class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f4e9e6] dark:bg-[#294233] pl-4 pr-4"
					>
						<p class="text-sm font-medium leading-normal">Faith &amp; Perspective</p>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									The Art of Storytelling: Crafting Characters with Depth
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									Exploring the nuances of character development, drawing inspiration from classic
									literature and personal experiences.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlLYRjXfyEi3b2g58OHDKbJlMNQ6KzaASxm-6LE-7glI83Z5mcB70Jl7VQNFF2F9BT5RomCepuibARD4LHRK_EFzUzYy1nHSchDSRGMWLIuU_edC1ONQ7HvZ-UlVtsQFUZmg9ejG0k8H6bdf3AfEqT32SAdAudcZOxW782rkhKMezZAekQCFUAnBKdwUZJ4jywBLIePzhg8Atps1dJsKQ5hWDrfoBfyKu-xwmCOzt7UX7nxl9ZUXdt9aZ68kfRCUMt3j8ioSqvnBE');"
						></div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									Wanderlust and Writing: A Journey Through the English Countryside
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									Reflections on a recent trip to the English countryside, exploring the landscapes
									that inspired some of my favorite stories.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdncRu69pkffgmfL4iMDsaeb0jFBuhG2FS9zFeA5IRvPsaw6Z6_TsJs2IVobWyBDCTUJiGjPvjz3x7AadN8aWpVtyKfyOoKguevrdkXhxuCbJ6ZDVYeiKThJDc0ejZfWQJS4jKMKhQ4obdf2bUVhK-hz6TTOu2Qh84Euy6cC41OyDMtmBCFwA_YtprtOBE7kAkUYPRgPuWRNxduoI39gwNVGX3sDWc48mdWqcC2h0X2eEfrnlzgOiXlNSliT2ao-E8paTKFs7XYvo');"
						></div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									Finding Faith in Fiction: Weaving Spiritual Themes into YA Romance
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									Discussing the role of faith in my writing, and how I integrate spiritual themes
									into my stories in a meaningful way.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuASunyG8__jhXG0urZNkiZPsQ4wTvIMkQmXEKcGlHscGFd1If2DgQC_trKQTKSJg7JH9gSEBSGhobpULlsysbnvU7BOSmP1V6s7bDi9S7wHACkJUVgH1gywXkWMV8ubm2HZvLoV9tlJjg0vjgW6I8bB-BIQsuBhQdfpWQ53GkW6pUbtWPCEm-TU-549expyZ9_JTtjDiSXb2SPWHyu1XCx0OTFRWxLjdvgWvi2ig3hOl0HioJfCfxQU2ISH9Q1EQAZPHseQWDmpRfw');"
						></div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									The Magic of First Drafts: Embracing Imperfection in the Creative Process
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									Sharing my thoughts on the writing process, and the importance of embracing
									imperfection in the first draft.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuALIrivp-puBYQZNk0Cl5YHvEDfIlHa2Q9ZxFykz_o4g6UYDR47aYvbAnjfIB9EiqQ9nHI2N1jlUeIu1dHgbELN9p-oy40axYs6Lbr-wXl-crid2h6c816Ol8s_RHi2y6xisddll9ABMhFdZCJEX1-Z4e9BjqL54y0ZRU3eGb2dzVPc4JPfz2YJqw99H3VFCfrYeBDC1vjSSH4AOEoUkfW4qHo6K5WC8RQOySgoQOCBXgbU6C6uarSTCKzU55e0AZNbOQ038eFRAdA');"
						></div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									Exploring Historical Settings: Research and Inspiration
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									A look into the research process for my historical novels, and the inspiration I
									draw from different time periods.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuACN1-0nakYG-NxUNUppaUKgbSqFbZ0Sr8pUAYawje_FCcKp0-UAze3G1MDBhZwgls5I8O_MGV-WTDS8Zx5_2CjI43SdGeX30-0wvgXIfmdZcSPHYYbKKCfBZfIiukSnSPzxNUVSa8JiuKKz7enktyAuVPD7v3voCaaZsnKejVLICl2amaCgYGJHvXd7zE2vhkQ2aDxzmJ4D8YQuGrmRSeVQwXh2ZvzCSnS9LopOTZ3GxBaXOSsnoR2YVXNWI_7WDUyNnZqtWFuVn0');"
						></div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-[2_2_0px] flex-col gap-4">
							<div class="flex flex-col gap-1">
								<p class="text-base font-bold leading-tight">
									The Power of Community: Connecting with Readers and Fellow Authors
								</p>
								<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
									Reflecting on the importance of community in the writing world, and the
									connections I've made with readers and fellow authors.
								</p>
							</div>
							<button
								class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4e9e6] dark:bg-[#294233] text-sm font-medium leading-normal w-fit"
							>
								<span class="truncate">Read More</span>
							</button>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdcB9a5ln74owp384_kawnvpSAQgPvGoyKYOr6pUDQmLar7rxcwLeRdjJd_ogMlAyqqob0tlGKWMvODV3kj-7fkAwgXrvQfmdIkWLw8R_DSJvj6L5GTG-zW_BbTT7Uzsg6PJ3C5g5EqW7I-LLvq8meJw6vLOfEsduU94Q90K3yzqHp2anxe2qjXL4XsMze5npmJ2HOL3SnSLqaKTSuhxxWOxHErd5I3f2B1H29MG7GlyJ5e5fvuOdTP2cYIlUToL2hxz1lw-l6PZw');"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
