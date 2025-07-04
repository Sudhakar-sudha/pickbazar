// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
        screens: {
        'xs320': '320px', // ✅ custom breakpoint
      },
    },
  },
  plugins: [],
   variants: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
}
