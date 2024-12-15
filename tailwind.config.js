/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'w-sm',
    'w-md',
    'w-lg',
    'w-xl',
    'w-full',
    'h-full',
  ],
  theme: {
    extend: {
      width: {
        'sm': '320px',
        'md': '384px',
        'lg': '512px',
        'xl': '1024px',
      }
    },
  },
  plugins: [
  ],
}

