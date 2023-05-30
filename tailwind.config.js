/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-libre-franklin)'],
			},
			colors: {
				blue: 'hsl(223, 87%, 63%)',
				paleBlue: 'hsl(223, 100%, 88%)',
				lightRed: 'hsl(354, 100%, 66%)',
				gray: 'hsl(0, 0%, 59%)',
				veryDarkBlue: 'hsl(209, 33%, 12%)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
