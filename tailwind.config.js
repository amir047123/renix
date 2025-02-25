const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // 320px for our most small device
      sm: "375px",
      // 375 px for our regular mobile device
      sml: "500px",
      // 500px for our large mobile device
      md: "667px",
      // 667px for our regular tablet device
      mdl: "768px",
      // 768px for our large tablet device
      lg: "960px",
      // 960px for our small laptop device
      lgl: "1024px",
      // 1024px for our extra laptop device
      xl: "1280px",
      // 1280px for our small desktop monitor size
      xxl: "1366px",
      // 1366px for our medium desktop monitor size
      exl: "1440px",
      // 1440px for our regular desktop device size
      exxl: "1540px",
      // 1440px for our regular desktop device size
    },

    colors: {
      accent: "#2A2170",
      primary: "#90C347",
      lightPrimary: "#A6CF6C",
      secondLightPrimary: "#BCDB91",
      thirdLightPrimary: "#D3E7B5",
      whiteSmoke: "#E9F3DA",
      // secondary color
      secondary: "#0A2004",
      textColor: "#3B4D36",
      lightTextColor: "#6C7968",
      darkGray: "#9DA69B",
      gray: "#CED2CD",
    },

    extend: {},
  },
  plugins: [],
});
