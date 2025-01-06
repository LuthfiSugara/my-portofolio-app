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
    'invisible',
    'h-0',
  ],
  theme: {
    extend: {
      width: {
        'sm': '320px',
        'md': '384px',
        'lg': '512px',
        'xl': '1024px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [
  ],
}

