import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite'
import { extractorSvelte, presetUno, presetTypography, transformerVariantGroup } from 'unocss'
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg', 'webp'];

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
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(
					url.pathname.lastIndexOf('.') + 1
				);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						picture: String(true)
					});
				}
				return new URLSearchParams();
			}
		}),
		sveltekit()
	]
};

export default config;
