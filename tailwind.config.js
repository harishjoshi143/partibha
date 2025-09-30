/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray_light: "#343434",
        gray: "#5E5B57",
        gray_white: "#8B8882",
        red: "#E70000",
      },
      backgroundImage: {
        welcome_header:
          "url('/src/assets/images/png/walcome-header-background.png')",
      },
      boxShadow: {
        backdrop: " 1px 1px 4px 4px #00000040",
        tabsBackdrop: " 0px 0px 2px 1px #00000040",
        input_shadow: " 1px 1px 4px 0px #00000040",
      },
      screens: {
        min_500: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
