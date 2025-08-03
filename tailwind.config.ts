import { type Config } from "tailwindcss";

const config: Config = {
	darkMode: "class", // keep if you want dark mode toggling
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./pages/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(42, 40%, 95%)", // soft warm gray
				foreground: "hsl(210, 10%, 20%)", // charcoal
				primary: "hsl(100, 20%, 40%)", // sage green
				"primary-foreground": "white",
				secondary: "hsl(10, 40%, 70%)", // clay red
				"secondary-foreground": "black",
				muted: "hsl(42, 30%, 90%)",
				accent: "hsl(100, 30%, 85%)",
			},
		},
	},
	plugins: [],
};
export default config;
