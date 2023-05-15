/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "coffee", "winter"],
  },
  themes: [
    {
      mytheme: {

        "primary": "#b4e580",

        "secondary": "#291cdb",

        "accent": "#47d8e8",

        "neutral": "#201B27",

        "base-100": "#4A304B",

        "info": "#5686CD",

        "success": "#7BE5B5",

        "warning": "#FDD568",

        "error": "#E94961",
      },
    },
  ],
  plugins: [require("daisyui")],
}

