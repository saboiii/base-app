/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alternate: ['Montserrat', 'sans-serif'],
        numans: ['Numans', 'sans-serif'],
      },
      animation: {
        title: "title 1.5s ease-out forwards",
        "fade-in-2": "fade-in 1.5s ease-in-out forwards",
        "fade-in-3": "fade-in 2.5s ease-in-out forwards",
        "fade-bottom": "fade-bottom 1.5s ease-in-out forwards",
      },
      keyframes: {
        title: {
          "0%": {
            "letter-spacing": "0.1em",
            opacity: "0",
          },
          "25%": {
            opacity: "0%",
          },
          "60%": {
            opacity: "100%",
          },

          "100%": {
            opacity: "100%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-bottom": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
