/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sandalwood: "#E2C4A8", // Lighter Bronze/Parchment for text contrast on dark
        cinnabar: "#E65A5A", // Slightly brighter red for visibility on blue
        paper: "#1E2B45", // Dark Blue Surface (was Parchment)
        ash: "#94A3B8", // Light Grey (Slate 400) for muted text on darkbg
        ink: "#F5F2EA", // Light Parchment (was Midnight Blue)
        gold: "#FFD700", // Bright Gold
        midnight: "#0F172A", // Deepest Blue
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

