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
					<h1 class="tracking-light text-[32px] font-bold leading-tight min-w-72">
						Books &amp; Projects
					</h1>
				</div>
				<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Current Work in Progress
				</h2>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-col gap-1 flex-[2_2_0px]">
							<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
								Coming Soon
							</p>
							<p class="text-base font-bold leading-tight">Whispers of the Heart</p>
							<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
								In the quaint town of Willow Creek, where secrets linger like the scent of blooming
								jasmine, Amelia finds herself drawn to the enigmatic newcomer, Ethan. Their paths
								intertwine amidst the backdrop of a charming bookstore and a community steeped in
								tradition. As they navigate the complexities of their pasts, a tender romance
								blossoms, guided by faith and the whispers of their hearts.
							</p>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2sAw0YgYL3DaANlYPKYIZLkj2BIKzIjix0p2zOjS8Fi-GDnWfxZin0FKTW_dicZVsAdotfdcGWIgiuvVP1mjcNKVJ-Op1obtItCn_YPPc1hVm9o5kSkK4UsexTlIPB3FGKnOpCAzbT-037-BA-vrr8vBjFbPHGaQ74sNoIHc_30CGMd85yLjHKcBmmNaFuZCuhsQ6wU7w7780E0518cYudsMzkwIiLV6c7Qhmv-Fxwym-nT22DSe5UjYPTp1wwyjBB1-NGydM6Lc');"
						></div>
					</div>
				</div>
				<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Project Archive
				</h2>
				<div class="p-4">
					<div class="flex items-stretch justify-between gap-4 rounded-xl">
						<div class="flex flex-col gap-1 flex-[2_2_0px]">
							<p class="text-base font-bold leading-tight">The Secret Garden of Dreams</p>
							<p class="text-[#a15a45] dark:text-[#9bc0a9] text-sm font-normal leading-normal">
								In the heart of a bustling city, amidst the chaos of modern life, Clara discovers a
								hidden garden, a sanctuary where dreams take root and love blossoms unexpectedly. As
								she tends to the garden's secrets, she encounters Daniel, a kindred spirit whose
								presence ignites a spark of hope and romance. Together, they embark on a journey of
								self-discovery and faith, guided by the whispers of the garden and the promise of a
								love that transcends time.
							</p>
						</div>
						<div
							class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
							style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDEkMtDqM6PlSky1gOtIRNE2lwoJxd6lEPmv6ZP4KYWSdFyAENVZpwCl6MahR6zQzJqZDvrFwl2nTjOdBF2ZwZTpPHXhXGVSpR9F445hx7WwOA-kJZNrnRRpJPstpsSCpesCWiOGCC86DIDUY2uX3QWGrzcaU62dIM-qhj3NERRHexKVAH2XR4PFZmy0ZohiuapENx5V7oHQFbCNWhE-iIWsNMu0ciM8mJwiah5Bxg-fnfgqgXnJKIECiWLHnoprtes1XPBooEaoU');"
						></div>
					</div>
				</div>
				<p class="text-base font-normal leading-normal pb-3 pt-1 px-4">
					My mission is to craft wholesome romance novels that resonate with the timeless charm of
					Jane Austen's works while embracing a Christian worldview. I believe in stories where love
					unfolds gently, characters navigate challenges with grace, and faith serves as a guiding
					light. My novels offer a refreshing escape into worlds where romance is subtle yet
					profound, and the journey of love is as inspiring as the destination.
				</p>
			</div>
		</div>
	</div>
</div>
