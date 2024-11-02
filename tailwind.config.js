/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/image 11.jpg')",
        'bg-1': "url('/image/image 24.png')",
        'bg-2': "url('/image/nurse.gif')",
      },
    },
  },
  plugins: [],
}
