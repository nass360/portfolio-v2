/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F5',
        'cream-d': '#F2EDE7',
        dark: '#1B1B1F',
        'dark-l': '#3A3A42',
        muted: '#8E8D8A',
        'muted-l': '#B8B6B2',
        'muted-f': '#D9D7D3',
        sig: '#C4421A',
        'sig-d': '#A33615',
        'sig-l': '#E05A30',
      },
    },
  },
  plugins: [],
}
