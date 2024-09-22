import type { Config } from "tailwindcss";
import tailwindAnimatePlugin from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				primary: [
					"var(--font-placardNext-light)",
					"var(--font-placardNext-regular)",
					"var(--font-placardNext-medium)",
					"var(--font-placardNext-bold)",
				],
				condensed: [
					"var(--font-placardNextCond-light)",
					"var(--font-placardNextCond-regular)",
					"var(--font-placardNextCond-medium)",
					"var(--font-placardNextCond-bold)",
				],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [tailwindAnimatePlugin],
};
export default config;
