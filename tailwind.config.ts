import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'third': '#F5DB13',
				'primary': '#F2B807',
				'secondary': '#F28F16',
				'danger': '#D93E30',
				'grey': '#F6F7F9',
				'paragraph': '#212121',
				'blue' : '#35BAFF',
				'pink' : '#F4B5C1',
				'green' : '#64D368',
				'gold' : '#F9DF7B',
				'red' : '#F2B807',
				'yellow' : '#D93E30',
			},
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
