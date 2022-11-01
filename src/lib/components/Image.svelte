<script lang="ts">
	export let src: {
		sources: Record<string, { src: string }[]>;
		fallback: { src: string | null | undefined };
	};
	export let alt: string | null | undefined;
	let clazz: string;
	export { clazz as class };
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src}`).join(', ')} type={'image/' + format} />
	{/each}
	<img src={src.fallback.src} {alt} loading="lazy" class={clazz} />
	<!-- https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes -->
</picture>

<style>
	img {
		max-width: 100%;
	}
</style>
