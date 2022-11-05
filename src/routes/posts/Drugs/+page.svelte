<script lang="ts">
	import { fly } from 'svelte/transition';
	import { dev } from '$app/environment';
	import '$lib/css/glitchedText.scss';

	let overlayOpen = !dev;
</script>

<svelte:head>
	<title>The dangers of drugs</title>
	<meta name="description" content="Warning: extremely 1-sided" />
</svelte:head>

{#if overlayOpen}
	<div
		class="w-screen h-screen flex flex-col justify-center items-center overlay absolute top-0 left-0"
		transition:fly={{ duration: 800, y: -600 }}
	>
		<!-- TODO: add github link to this page -->
		<div class="flex flex-col justify-center items-center pa-6 bg-white rounded-xl">
			<p class="text-(xl center) ">
				This page <span class="font-bold text-2xl">requires</span> JS to run (Source code is
				availible on my github if you don't trust me).
				<br />
				It also contains a bunch of stuff about (as you can guess from the title) drugs.
				<br />
				This is also an extrememly 1-sided argument about why drugs are bad because I'm too lazy to do
				proper research
				<br />
			</p>

			<span class="font-bold text-(4xl center)">Do you wish to proceed?</span>
		</div>
		<button
			class="border-none w-9/10 h-16 rounded-xl mt-6 text-3xl  transition active:(bg-red-800 text-white) hover:(border-2 bg-red-600)"
			on:click={() => (overlayOpen = false)}
		>
			Yes
		</button>
	</div>
{/if}

<div>
	<h1 class="text-(6xl red-600 center)">
		Welcome to dangerous realm of <span class="glitch text-red-600" data-text="drugs">drugs</span>.
	</h1>
	<h2 class="text-(2xl center) italic">Rather do not enjoy your stay and instead leave.</h2>
</div>

<div class="prose prose-truegray text-2xl">
	<p>Drugs. When you mention them, most people think of things like</p>
	<ul>
		<li>Cannabis/weed</li>
		<li>Ecstasy</li>
		<li>Meth (queue in breaking bad intro)</li>
		<li>Other illegal drugs</li>
	</ul>
	However, almost all medicines, and non-food related substances are drugs. This includes things such
	as
	<ul>
		<li>Alcohol</li>
		<li>Caffeine</li>
		<li>Morphine</li>
		<li>Panado (Paracetamol)</li>
	</ul>
	<p>The definition of drug is</p>
	<blockquote>
		a substance other than food intended to affect the structure or function of the body
	</blockquote>
	<p>
		This boils down to "if it isn't food or water and it's intended to affect the body, it's a drug"
	</p>
</div>

<style>
	.overlay {
		background-image: url(https://68.media.tumblr.com/ebd489e98ac023499101f56f195437c7/tumblr_n5mufrqAk21tc216ao9_500.gif);
		background-size: cover;
		background-repeat: none;
	}
</style>
