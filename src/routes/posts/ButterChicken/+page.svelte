<script lang="ts">
	import { t } from '$lib/translations';
	import Atropos from 'atropos/svelte';
</script>

<svelte:head>
	<title>{$t('butterChicken.title')}</title>
	<meta name="description" content={$t('butterChicken.summary')} />
</svelte:head>

<article class="text-base text-xl lg:text-2xl prose prose-truegray min-w-full">
	<div class="py-8 rounded-2xl">
		<h1 class="color-[#ce6f08] text-center text-size-6xl lg:text-size-8xl">
			{$t('butterChicken.title')}
		</h1>
		<div class="text-(center size-2xl) lg:text-size-3xl italic flex flex-col content-center">
			<p class="leading-3">
				{$t('butterChicken.summary')}
			</p>
			<a href="#recipe" class="text">({$t('butterChicken.jump')})</a>
		</div>
	</div>

	<section>
		<h2 class="color-[#ce6f08]">
			{$t('butterChicken.about.title')}
		</h2>

		<div class="flex gap-12 flex-col-reverse md:flex-row">
			<p class="w-full md:w-2/3">
				{$t('butterChicken.about.content')}
			</p>

			<Atropos class="w-full md:w-1/3">
				<a href="https://commons.wikimedia.org/wiki/File:Chicken_makhani.jpg">
					<figure class="bg-white pa-4 rounded-xl">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg"
							alt="Chicken Makhani, murgh makhani, or Butter Chicken"
							class="rounded-md shadow-lg transition"
							loading="lazy"
							data-atropos-offset="-2"
						/>

						<figcaption data-atropos-offset="5">
							{$t('butterChicken.about.imageCaption')}
						</figcaption>
					</figure>
				</a>
			</Atropos>
		</div>
	</section>

	<section>
		<h2 class="color-[#ce6f08]">
			{$t('butterChicken.history.title')}
		</h2>

		<div class="flex flex-row gap-12">
			<p class="w-3/5">
				{$t('butterChicken.history.content')}
				<br />
				<br />
				{$t('butterChicken.history.content2')}
			</p>

			<Atropos class="w-2/5">
				<a href="https://commons.wikimedia.org/wiki/File:Kundan-Lal-Gujral.jpg">
					<figure class="pa-4 rounded-xl bg-white">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/2/23/Kundan-Lal-Gujral.jpg"
							alt="Portrait of Kundan Lal Gujral"
							class="rounded-md shadow-lg hover:shadow-2xl transition"
							loading="lazy"
							data-atropos-offset="-2"
						/>

						<figcaption data-atropos-offset="5">
							{$t('butterChicken.history.imageCaption')}
						</figcaption>
					</figure>
				</a>
			</Atropos>
		</div>
	</section>

	<section id="recipe">
		<h2 class="color-[#ce6f08]">{$t('butterChicken.recipe')}</h2>
		<summary>{$t('butterChicken.serves')}</summary>
		<section>
			<h3 class="color-[#ce6f08]">
				{$t('butterChicken.ingredients.title')}
			</h3>

			<ul>
				<li>{$t('butterChicken.ingredients.fillets')}</li>
				<li>{$t('butterChicken.ingredients.cream')}</li>
				<li>{$t('butterChicken.ingredients.tomato')}</li>
				<li>{$t('butterChicken.ingredients.butter')}</li>
				<li>{$t('butterChicken.ingredients.spice')}</li>
				<li>{$t('butterChicken.ingredients.coriander')}</li>
			</ul>

			<section>
				<h3 class="color-[#ce6f08]">{$t('butterChicken.ingredients.marinate.title')}</h3>

				<ul>
					<li>{$t('butterChicken.ingredients.marinate.ggarlic')}</li>
					<li>{$t('butterChicken.ingredients.marinate.salt')}</li>
					<li>{$t('butterChicken.ingredients.marinate.cspice')}</li>
					<li>{$t('butterChicken.ingredients.marinate.bspice')}</li>
				</ul>
			</section>
		</section>
		<section>
			<h3 class="color-[#ce6f08]">{$t('butterChicken.method.title')}</h3>

			<ol>
				<li>{$t('butterChicken.method.slice')}</li>
				<li>{$t('butterChicken.method.mix')}</li>
				<li>{$t('butterChicken.method.grate')}</li>
				<li>{$t('butterChicken.method.addButter')}</li>
				<li>{$t('butterChicken.method.cookTender')}</li>
				<li>{$t('butterChicken.method.addTomatoes')}</li>
				<li>{$t('butterChicken.method.cookMore')}</li>
				<li>{$t('butterChicken.method.sauce')}</li>
				<li>{$t('butterChicken.method.pour')}</li>
				<li>{$t('butterChicken.method.dish')}</li>
			</ol>
		</section>
	</section>
	<section>
		<h2 class="color-[#ce6f08]">{$t('butterChicken.references.title')}</h2>

		<ul>
			<li>
				<a href="https://en.wikipedia.org/wiki/Butter_chicken">
					https://en.wikipedia.org/wiki/Butter_chicken
				</a>
			</li>
			<li>
				<a
					href="https://food.ndtv.com/food-drinks/the-history-of-butter-chicken-indian-cuisines-most-loved-curry-1686611"
				>
					https://food.ndtv.com/food-drinks/the-history-of-butter-chicken-indian-cuisines-most-loved-curry-1686611
				</a>
			</li>
		</ul>
	</section>
</article>
