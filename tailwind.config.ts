import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Venera', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      colors: {
        green: '#0A5F63',
        blue: '#001737'
      },
      backgroundImage: {
        main: "url('/background/wallpaper.jpg')"
      }
    }
  },
  plugins: []
}
export default config
