<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'uno.css';
	import 'atropos/css/min';
</script>

<div class="app">
	<Header />

	<main data-sveltekit-prefetch>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
