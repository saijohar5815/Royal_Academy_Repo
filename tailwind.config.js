/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#072B61',
          light: '#114285',
          dark: '#031a3d',
        },
        secondary: '#FFFFFF',
        accent: {
          DEFAULT: '#FFC107',
          light: '#ffd54f',
          dark: '#ffb300',
        },
        bglight: '#F5F7FB',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(7, 43, 97, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(7, 43, 97, 0.15)',
        'glass': '0 8px 32px 0 rgba(7, 43, 97, 0.05)',
      },
    },
  },
  plugins: [],
}
