/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['var(--font-montserrat)']
      },
      gridTemplateColumns: {
        suny:"repeat(auto-fit,minmax(10rem,1fr))",
      },
      colors: {
        'cust1': '#080b16',
        'cust2': '#172b51',
        'cust3': '#141827',
        'cust4': '#11182f',
        'cust5': '#94a3b8',
        'cust6': '#5a7dc2',
        'cust7': '#34396a',
      }
    },
  },
  plugins: [],
}
