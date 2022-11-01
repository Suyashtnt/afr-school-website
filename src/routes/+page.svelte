<script lang="ts">
	import { t } from '$lib/translations';
	import Atropos from 'atropos/svelte';
	import Img from '$lib/components/Image.svelte';
	import ChickenMakhani from '$lib/assets/Chicken_makhani.jpg?w=300;600;800&imagetools';

	$: posts = [
		{
			image: ChickenMakhani,
			title: $t('homePage.posts.0.title'),
			summary: $t('homePage.posts.0.summary'),
			link: '/posts/ButterChicken'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Random blog for random school projects that need something like this"
	/>
</svelte:head>

<h1 class="text-center text-4xl md:text-7xl mb-0">{$t('homePage.welcome')}</h1>
<h2 class="text-center italic color-black text-2xl md:text-4xl mb-6">
	{$t('homePage.subtitle')}
</h2>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen">
	{#each posts as post}
		<a href={post.link} class="text-black decoration-none">
			<Atropos>
				<div class="bg-white rounded-2xl flex flex-col">
					<Img src={post.image} class="w-full h-full rounded-2xl" alt="" />
					<div class="px-4 pb-2">
						<p class="text-4xl text-center" data-atropos-offset="5">{post.title}</p>
						<p class="text-2xl" data-atropos-offset="3">{post.summary}</p>
						<button
							class="w-full pa-2 border-none bg-blue text-3xl rounded-xl"
							data-atropos-offset="7"
						>
							{$t('homePage.goto')}
						</button>
					</div>
				</div>
			</Atropos>
		</a>
	{/each}
</div>
