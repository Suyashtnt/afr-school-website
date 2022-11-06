<script lang="ts">
	import Atropos from 'atropos/svelte';
	import Img from '$lib/components/Image.svelte';
	import AdVault from '$lib/assets/AdNauseum.png?w=500;300;600;800;1200&imagetools';
</script>

<svelte:head>
	<title>Stay Private</title>
	<meta name="description" content="How to stay private in the age of social media" />
</svelte:head>

<article class="prose prose-truegray text-2xl w-full">
	<section>
		<h1 class="text-(6xl center)">Stay private</h1>
		<h2 class="text-(2xl center) italic">
			Some extensions and tips on how to stay private in the age of social media.
		</h2>
	</section>

	<section>
		<h2>Social media has eyes everywhere</h2>
		<p>
			Weather you are minding your own business scrolling through your feed, or taking a family
			photo and posting it to your private facebook page with a hashtag, people will know about it.
			Social media has many terms of service and privacy statements, which most people skip (If you
			don't, congrats on being smart, anyways). Some are better than others, but who wants to read
			those long, boring legal documents. If only there was a
			<abbr title="Too long, didn't read"> TL;DR </abbr> version of those documents. Oh wait,
		</p>
	</section>
	<section>
		<h2>Presenting ToS;DR</h2>
		<p>
			<a href="https://tosdr.org">ToS;DR is a website</a> which shows you the privacy standards of
			various websites. It also has browser extensions for
			<a
				href="https://addons.mozilla.org/firefox/downloads/latest/terms-of-service-didnt-read/addon-latest.xpi"
			>
				Firefox
			</a>,
			<a href="https://chrome.google.com/webstore/detail/hjdoplcnndgiblooccencgcggcoihigg">
				Chrome
			</a>,
			<a href="https://chrome.google.com/webstore/detail/hjdoplcnndgiblooccencgcggcoihigg">
				Safari
			</a>, and <a href="https://tosdr.org/en/downloads">More.</a>
		</p>
		<section>
			<h3>An example: facebook</h3>
			<p>
				Lets look at Facebook's privacy standards on <a href="https://tosdr.org/en/service/182"
					>ToS;DR</a
				>. First of all, we can see that it's grade is E. This already tells us that it's not the
				most private of websites. Now lets look into the details,
			</p>
			<ul>
				<li>Deleted content is not really deleted</li>
				<li>Facebook stores your data whether you have an account or not.</li>
				<li>The service collects many different types of personal data</li>
				<li>This service tracks you on other websites</li>
				<li>This service may use your personal information for marketing purposes</li>
			</ul>
			<p>
				Oh my, look at the sheer amount of concerning things it does. It doesn't even delete your
				embarrassing photos! Oh yeah, and having a private page doesn't automatically mean all your
				content is private. If your post has a hashtag of some sort, and you search for the hashtag,
				it will be in the results. So remember to keep the hashtags away from your embarrassing baby
				photos.
			</p>
		</section>
	</section>
	<section>
		<h2>Blocking the trackers</h2>
		<p>
			Now that you know about the trackers, how can you block them when using these websites. There
			are tools called <span class="italic font-bold">Ad blockers</span> which do that. Despite the
			name, many of them also block various trackers, since they work with ads to track your every
			search, message, post and comment you've ever made to give you the most "relevant" ads, which
			usually turn out to be incredibly irrelevant. There are many of these ad blocks, such as
			UBlock Origin, ABP, but my favourite is <a href="https://adnauseam.io/">AdNauseam</a>.
			<br />
			<br />
			AdNauseam is an incredible ad blocker, which uses the same engine as UBlock Origin, which is widely
			regarded as the best ad blocker out there. The thing AdNauseam does different, is that it
			<span class="italic font-bold">Fights back</span>. Whenever it encounters an ad, it doesn't
			just remove it from your view, it actually clicks it in the background. This does a few
			things:
		</p>
		<ul>
			<li>It wastes the advertisers money, as now they are paying for the "click" you just made</li>
			<li>
				It confuses the advertisers, as now you are clicking every ad you see, and they don't know
				what you are actually interested in
			</li>
			<li>Makes you fight back against the ads and trackers present everywhere on the internet</li>
		</ul>
		<div class="flex gap-12 flex-col-reverse md:flex-row">
			<p class="w-full md:w-2/3">
				Another nice thing about AdNauseam is that it has an "Ad vault". This vault contains every
				single ad you did not get to see since you enabled it, and shows an estimate on how much
				money you've wasted companies.
			</p>
			<Atropos class="w-full md:w-1/3">
				<figure class="bg-white pa-4 rounded-xl">
					<!-- Since people are going to see this image commonly, lazy loading will hurt performance more than it will gain -->
					<Img
						src={AdVault}
						alt="My ad vault, showing every single ad I've blocked"
						class="rounded-md shadow-lg transition"
						lazy={false}
						data-atropos-offset="-2"
					/>

					<figcaption data-atropos-offset="5">
						My ad vault, showing every single ad I've blocked
					</figcaption>
				</figure>
			</Atropos>
		</div>
	</section>
	<section>
		<h2>Google isn't the only search engine</h2>
		<p>
			Google isn't the only search engine out there, and there are some great alternatives. Here are
			2 great alternatives to Google.
		</p>
		<section>
			<h3>DuckDuckGo</h3>
			<p>
				<a href="https://duckduckgo.com">DuckDuckGo</a> is a privacy focused search engine, which is
				incredibly popular as an alternative. It has a grade A on ToS;DR and is a great alternative for
				people wanting a more private search engine. It even has some neat features, like "bang!"s. type
				in "!yt duckduckgo" and you are now on youtube searching for "duckduckgo".
			</p>
		</section>
		<section>
			<h3>StartPage</h3>
			<p>
				<a href="https://www.startpage.com/">StartPage</a> is a private search engine that wraps around
				google. It uses a bunch of methods and tricks to make sure you have the most private search,
				from tracker blocking to proxying your search through their servers. It even has an anonymous
				view mode, which is pretty much a mini-proxy to any website you are visiting, right in the search
				engine results.
			</p>
		</section>
	</section>
</article>
