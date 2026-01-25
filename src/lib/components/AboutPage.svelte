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
						<h1 class="tracking-light text-[32px] font-bold leading-tight">About Chloe</h1>
						<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
							Chloe is a celebrated author of young adult fiction, known for her heartwarming tales
							of romance and faith. Her writing is deeply influenced by the timeless works of Jane
							Austen, blending classic storytelling with a contemporary Christian perspective.
							Chloe's novels explore themes of love, virtue, and personal growth, set against the
							backdrop of charming, small-town life.
						</p>
					</div>
				</div>
				<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Chloe's Journey
				</h2>
				<p class="text-base font-normal leading-normal pb-3 pt-1 px-4">
					From a young age, Chloe found solace and inspiration in the pages of books, particularly
					those penned by Jane Austen. This early passion for literature blossomed into a desire to
					craft her own stories, filled with characters who navigate the complexities of life with
					grace and resilience. Her faith plays a central role in her narratives, offering a message
					of hope and redemption.
				</p>
				<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Beyond the Page
				</h2>
				<p class="text-base font-normal leading-normal pb-3 pt-1 px-4">
					When she's not writing, Chloe enjoys exploring new cultures through travel, savoring the
					rich flavors of coffee, and spending quality time with her loved ones. These experiences
					often find their way into her stories, adding depth and authenticity to her characters and
					settings.
				</p>
				<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Inspiration Gallery
				</h2>
				<div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2eZ47YtXG8L3ceXm36rjjpOwjT-cUkp_kaYpNolWAWKQupO8PpY87PWovWqCffpmS4LL-zAjc7n5TQ6KdLxFdDywgiP9tVTN5EZF_UULcnVxUQyGBZVd1UfqIKOBSjGTVMK4f3M_KYWrO7ZBI_POVdXuUCvtTdOoieTB-qNcXR4nxRVM21yjbITNOcb7poPQ5meG2htGoBL5tybeDVtAC0w82gS8TxNzWp9FBsAR_eT4b6SZAJpsiXFubA6hTugXz5Tc5qG8wZeU');"
						></div>
					</div>
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMaRW7MaennlMKN5Ms1emp0qij9133hXMYC1DYWs5MUCHF8PKmkVTuoRQYITJVWiUBoZlKQE0-NG0Vu4cSW1xZUFjb3cW3GO3uwFwsEK0Lko-HPWFKedKSoTEuDD8jUlVr3wmpl4mlTFHnWwvilTiDCKjcys1TBlreCpjlbSASDTx4Lun8GvlJ38I7FOFl3h2wYmBtZyLk_WWoh5wOdjMOKy5_BBIhYaFqt6dIwXo8Jl2MSum7oknSs3Zs-X-k_UsuzZ8y-XNWyf0');"
						></div>
					</div>
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1hj77H_UROWnMnXaeXVXdvqYNJVRDrwTnMZ-Nnx0C1CHsJPOYfyikDRF5HYLz_jgOxyWc1_eo8cjfmWAyvyg1rp9K6Sl3Hh-H6UV1Naq4Lvx66RQK25YQXVdJo3ExrhqYKqwM7K31uCj3qyoJefG_7EtFb6YXR2BKbcQ8fvv5quIBYUuR7IS0i-5CuL6YfmD_tUoYAyfbAb7yOGAtsbpPYlm2tFl8vlal9953SVqNiJgcaMG5PfgFZjA9a3-LGNfAeIdSjCvYOok');"
						></div>
					</div>
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBviqrMNeaAbRE2sT9OmFzu5U4YiqghUN1LzStaOJD8prohIXJcl-oE5bnJ9HLD0c_7jbR3zH7RlF8AFXcshiJgIHl4nxr9rWvK4KzpuY8zeDJF3_7Hf0rHD4qDF_gwUXZ7A2KtWH_Fq49TPEx7KtbeWyy4sXsZA-J8cQay6Tr9a7lHoWabJhnNsL_eRj7RHN_7GloCJ_h7xnBE4dV9EAIWtUqfiIvwT7tC91TOqCI-B7tDcHa0aRp4eiyfrdAYmJ46j60YFRkigpA');"
						></div>
					</div>
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCf9QPMQtjIj_H7MNssgAHvWL2rmtkBdvcLPrC78zfbsM_k2tkC4P2G0gThfkWbR3qzG75iFyLMHtAC99fk1S5hkmN0jvYaijGI3X6cjhwqCB2n5kcmsquiB81458eR_9xRol8HeEMW0Mre4Z317dAqBzNpwNpnB7jOSpDybLzW-4wuNdcM8m-ojpJoDefqLDmRmJwxeZNz06RnLSM-5wf4igVvZb1mVDseCkWV9V6GSJ7p4Jhjn2N4rBcEX2-1ZL2MrrxS-JRnMBk');"
						></div>
					</div>
					<div class="flex flex-col gap-3">
						<div
							class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUyZBM8Z-tDe1XsVAR9rmGEJa8Fp3U6c17IltabHYDE__ogvdpwIOMNyWAH9osf8tN7UwMiEjeS7nh6NnVVAyVkbR0KgvWSjoCabRqtPsof7pqNv4IwPbNxS5TrEpwQ5drgontmcyeDyPeCX3qw1FCSWoIjawbdI_Zj6Bp4fwaIG_EIvA1x0PojkPQIaEIs3qWlKvckKqDE6VypZENONRZ4CzcGo7cXoY5Eezq0xkEi7t_Eh6lw4ZVciB2jFg53PeTbGoAevnp4Aw');"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
