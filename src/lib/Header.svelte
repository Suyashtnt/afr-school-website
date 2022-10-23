<script lang="ts">
	import { t, locale, loadTranslations } from '$lib/translations';

	async function setLocale(event: Event) {
		const localeV = (event.target as HTMLSelectElement).value;
		await loadTranslations(localeV);
		locale.set(localeV);
	}
</script>

<header class="flex justify-between align-center pa-3 bg-white shadow-lg">
	<div>
		<a href="/" class="text-(3xl) color-black decoration-none"> {$t('common.title')} </a>
	</div>
	<div />
	<div class="flex align-center">
		<select on:change={setLocale} class="rounded-md border-none px-2">
			<option value="en">🇬🇧 English</option>
			<option value="af">🇿🇦 Afrikaans</option>
		</select>
	</div>
</header>
