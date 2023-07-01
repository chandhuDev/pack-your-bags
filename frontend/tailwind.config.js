/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
     '2xs': '340px',
      xs: '460px',
      sm: '620px',
      md: '768px',
    },
    // screens: {
    //   'sm': '576px',
    // },
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        'bg-black': '#000000',
      },
    },
  },
  plugins: [],
}
