<script lang="ts">
	import { getContext } from 'svelte';
	import { BUTTON_GROUP } from './BtnGroup.svelte';
	const { selectButton, values } = getContext(BUTTON_GROUP);

	export let value: string;
	export let active = true;
	$: active = $values.includes(value);

	let clazz = '';
	export { clazz as class };
</script>

<button
	on:click={() => selectButton(value)}
	class:active
	class="flex-grow {clazz} rounded-none border-none text-4xl"
>
	<slot />
</button>

<style>
	.active {
		background-color: red;
	}
</style>
