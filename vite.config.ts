import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite'
import { extractorSvelte, presetUno, presetTypography, transformerVariantGroup } from 'unocss'

const config: UserConfig = {
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte],
			presets: [
				presetUno(),
				presetTypography()
			],
			transformers: [
				transformerVariantGroup()
			]
		}),
		sveltekit()
	]
};

export default config;
