export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
			},
			colors: {
				primary: "#0a0a0a",
				secondary: "#111111",
				borderColor: "#272727",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
				"up-down": "upDown 2s ease-in-out infinite",
			},
			animationDelay: {
				500: "500ms",
			},
			boxShadow: {
				"custom-dark": "0 4px 8px rgba(0, 0, 0, 0.7)",
			},
			gridTemplateColumns: {
				"auto-fill-minmax": "repeat(auto-fill, minmax(19rem, 1fr))",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
