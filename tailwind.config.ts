import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"pf-blue": {
					100: "#002B33",
					200: "#005566",
					500: "#539DAC",
					800: "#ADE0EB",
					900: "#D2F2F9",
				},
				"pf-pink": {
					100: "#330000",
					200: "#5C0A0A",
					500: "#B24D4D",
					800: "#E5B2B2",
					900: "#F0DBDB",
				},
				"pf-brown": {
					300: "#663E19",
					500: "#A67E59",
					700: "#D9BEA6",
				},
				"pf-green": {
					300: "#20602A",
					500: "#59A665",
					700: "#ACD2B2",
				},
				"pf-gray": {
					300: "#262626",
					500: "#4D4D4D",
					700: "#F0F4F2",
				},
				"pf-white": "#F0F4F2",
			},
			fontFamily: {
				serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
				sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
export default config
