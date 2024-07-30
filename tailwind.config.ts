/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      grey: {
        '50': '#f7f8f8',
        '100': '#eef0f0',
        '200': '#d9dede',
        '300': '#bdc7c6',
        '400': '#90a09e',
        '500': '#728583',
        '600': '#5c6d6c',
        '700': '#4b5958',
        '800': '#414b4a',
        '900': '#394141',
        '950': '#262b2b',
      },
      blue: {
        '50': '#eff9ff',
        '100': '#def1ff',
        '200': '#b6e5ff',
        '300': '#75d3ff',
        '400': '#2cbdff',
        '500': '#00a7fa',
        '600': '#0083d4',
        '700': '#0068ab',
        '800': '#00588d',
        '900': '#064a74',
        '950': '#042e4d',
      },
      green: {
        '50': '#eefff4',
        '100': '#d8ffe9',
        '200': '#b3ffd3',
        '300': '#77feb1',
        '400': '#1ef179',
        '500': '#0bdc66',
        '600': '#03b651',
        '700': '#068f42',
        '800': '#0b7038',
        '900': '#0b5c30',
        '950': '#003418',
      },
      red: {
        '50': '#fef2f2',
        '100': '#ffe1e1',
        '200': '#ffc8c8',
        '300': '#ffa2a2',
        '400': '#fd6868',
        '500': '#f53e3e',
        '600': '#e31f1f',
        '700': '#bf1616',
        '800': '#9e1616',
        '900': '#831919',
        '950': '#470808',
      },
    },
    extend: {},
  },
  plugins: [require('./src/config/tailwind/plugins/typography')],
}
