const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        parkinsans: ['Parkinsans']
      },
      outline: {
        purple: ['2px solid #1D1D5B', '2px'],
      },
      boxShadow: {
        'no-left': '4px 4px 6px rgba(0, 0, 0, 0.1)',
        'no-right': '-4px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

