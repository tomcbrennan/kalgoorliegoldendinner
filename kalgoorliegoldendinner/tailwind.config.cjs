module.exports = {
	content: ['./*/*.php', './*.php', './templates/**/*.twig'],
	theme: {
		extend: {
			aspectRatio: {
				'16/9': '16/9',
				'3/2': '3/2',
				'4/3': '4/3',
				'3/4': '3/4',
				'5/7': '5/7',
				'1/1': '1/1',
			},
			colors: {
				white: '#FFFFFF',
				black: '#000000',
				brand: '#3b8ec1',
				lightBlack: '#111111',
			},
			fontFamily: {
				display: ['Poppins', 'sans-serif'],
				body: ['Poppins', 'sans-serif'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1690px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
