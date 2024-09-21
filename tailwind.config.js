/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // specify where Tailwind should look for class names
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        Butt_primary: "#1da1f2", // Custom color for primary Primary Buttons
        Back_White: "#ffffff", //the main background.
        Text_DarkGray: "#333333", //for titles and body text.
        Back_LightGray: "#f5f5f5", //the main background.
        Hover_SoftBlue: "#6cc2f5", //Hover Effects/Links:
        Text_Black: "#000000", //for titles and body text.
        Back_VeryLightGray: "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        72: "18rem", // Custom spacing value
        84: "21rem",
        96: "24rem",
      },
      screens: {
        "3xl": "1600px", // Custom breakpoint
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        spinSlow: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
