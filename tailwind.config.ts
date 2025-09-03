import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{svelte,ts,js}',
    './src/app.html'
  ],
  theme: {
    extend: {
      fontFamily: {},
      container: { center: true }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

export default config;
