<script lang="ts">
	import { fly } from 'svelte/transition';
	import { dev } from '$app/environment';
	import '$lib/css/glitchedText.scss';

	import BtnGroup from '$lib/components/BtnGroup.svelte';
	import BtnGroupBtn from '$lib/components/BtnForGroup.svelte';
	let selected: ('curiosity' | 'cool')[] = ['curiosity'];

	let overlayOpen = !dev;
</script>

<svelte:head>
	<title>The dangers of drugs</title>
	<meta name="description" content="Warning: extremely 1-sided" />
</svelte:head>

{#if overlayOpen}
	<div
		class="w-screen h-screen flex flex-col justify-center items-center overlay absolute top-0 left-0 bg-white"
		transition:fly={{ duration: 800, y: -600 }}
	>
		<!-- TODO: add github link to this page -->
		<div class="flex flex-col justify-center items-center pa-6 bg-white rounded-xl">
			<p class="text-(xl center) ">
				This page <span class="font-bold text-2xl">requires</span> JS to run (Source code is
				available on my github if you don't trust me).
				<br />
				It also contains a bunch of stuff about (as you can guess from the title) drugs.
				<br />
				This is also extremely 1-sided (on the side of bad), because I'm too lazy to do properly research.
				None of the stories at the end come from me, they're all from the creative part of my brain.
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

<article>
	<section>
		<h1 class="text-(6xl red-600 center)">
			Welcome to dangerous realm of <br />
			<span class="glitch text-red-600" data-text="drugs">drugs</span>.
		</h1>
		<h2 class="text-(2xl center) italic">Rather do not enjoy your stay and instead leave.</h2>
	</section>

	<section class="prose prose-truegray text-2xl">
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
			<li>Penicillin</li>
			<li>Panado (Paracetamol)</li>
		</ul>
		<p>The definition of drug is</p>
		<blockquote>
			a substance other than food intended to affect the structure or function of the body
		</blockquote>
		<p>
			This boils down to "if it isn't food or water and it's intended to affect the body, it's a
			drug." And yes, that includes the caffeine in your coffee. And no, that does not include sugar
			(but certain sugars can bad in their own right).
			<br />
			<br />
			Illegal drugs are illegal because they can cause effects far worse than legal drugs, from hallucinations
			to death.
			<span class="italic font-bold">However,</span> this does not mean that all legal drugs are
			safe. In fact, most of them can be as dangerous as illegal drugs if in the wrong doses.
			Morphine can be deadly in the wrong doses, and so can Alcohol, and Panado, and almost all
			other legal drugs. Illegal drugs just get unsafe-er much faster than legal drugs, and are more
			likely to be abused because of their addictive properties.
			<br />
			<br />
			But, if illegal drugs are so dangerous, why do people turn to them?
		</p>
		<section>
			<BtnGroup bind:value={selected}>
				<BtnGroupBtn value="curiosity">Out of curiosity</BtnGroupBtn>
				<BtnGroupBtn value="cool">Wanting to seem cool</BtnGroupBtn>
			</BtnGroup>
			{#if selected[0] == 'curiosity'}
				<h2>Curiosity kills the cat (and in this case, the human.)</h2>
				You've seen people do drugs, and you want to know what it's like and if its even good. Despite
				you knowing that it can severely negatively affect your life, you try anyways.
				<br />
				<br />
				You might think that you're smart enough to not get addicted, but you're not. It's incredibly
				easy to get addicted to something that is designed to get you addicted to it. Being oblivious
				to this fact, you open up your handy <a href="https://www.torproject.org/">onion browser</a>
				and start searching for ways to get it, you find a few websites, and you realise that a lot of
				this stuff seems incredibly shady. You continue on anyways.
				<br />
				<br />
				Next thing you know, you have your wallet out next to you and you're about to buy a few grams
				of weed. You think to yourself if you are <span class="italic font-bold">really</span> going
				to be doing this, but you see that it's on a 70% discount and you impulse buy.
				<br />
				<br />
				Oh hey, you got some shady package in the mail today, delivered by some shady person. You open
				it to find that it's a bag of weed. Still being curious (and frankly stupid), you open it and
				decide to try it. Next thing you know there are cats flying around your room and you're having
				a conversation with an oak tree. You then promptly pass out.
				<br />
				<br />
				Fast forward a few days, and you're now addicted to weed. You're now spending all your money
				on this exact same shady website, and now there is no turning back. Congrats, you've just done
				the thing you promised yourself you wouldn't do at the start of this "adventure".
				<br />
				<br />
				Its been a month now, and you've moved on from weed, to meth, to cocaine, to heroin, and now
				you cannot turn back. You've doomed yourself from the start, and now your fate has been sealed.
			{:else}
				<h2>You have no friends and now you want some</h2>
				You're at school, grade 10. And school is over. Yay! Since you have 0 friends, you decide to
				go to a corner where it's usually quite and you can read a book. Then, you see a group of people
				drinking alcohol. You think to yourself "hey, those people may think I'm cool if I join them!"
				<br />
				<br />
				Being the introverted person you are, you awkwardly walk over to them and try to pretend like
				you know about alcohol. You then ask for some. They give you a can of beer, and you take a sip.
				You hate it, as it tastes disgusting. You then proceed to drink the rest of it anyways, because
				you want to seem cool so you have the chance of becoming friends. You then proceed to get (What
				you think is) drunk. You then proceed to do stupid things, like try to fight a tree, and then
				you go home without dying somehow.
				<br />
				<br />
				The next day, you go to the same group of people and they are happy to see you. Despite you not
				liking alcohol, you continue to drink it, because you want to seem cool. You then proceed to
				get drunk again, and do stupid things, like try to fight a brick wall, and then you go home without
				dying somehow (again).
				<br />
				<br />
				This carries on for a few weeks, until you get addicted to alcohol. You then proceed to drink
				it without people around, and you then proceed to get drunk without people around. You then proceed
				to do stupid things, at home this time. You go out to a mall and try to fight a car, and then
				get arrested for drunk driving since you attempted to drive the car you just fought. The police
				realise you are under 18, and you are sent to juvenile jail. You get out of jail, and you go
				home, and crack open a beer. You then proceed to get drunk, and do stupid things, like try to
				fight a brick wall, and then you go home without dying somehow (again). You then get arrested,
				and the cycled is doomed to repeat.
				<br />
				<br />
				Again.
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
					<br />
					And again.
				{/each}
			{/if}
		</section>
	</section>
</article>

<style>
	.overlay {
		background-image: url(https://68.media.tumblr.com/ebd489e98ac023499101f56f195437c7/tumblr_n5mufrqAk21tc216ao9_500.gif) !important;
		background-size: cover;
		background-repeat: none;
	}
</style>
