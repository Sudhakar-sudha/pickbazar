// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
        'xs320': '320px', // ✅ custom breakpoint
      },
    },
  },
  plugins: [],
}
