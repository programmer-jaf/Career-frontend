/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "82px" }],
        h2: ["52px", { lineHeight: "62px" }],
        h3: ["34px", { lineHeight: "44px" }],
        "h3-sb": ["34px", { lineHeight: "44px", fontWeight: "700" }],
        h4: ["26px", { lineHeight: "36px" }],
        "h4-r": ["26px", { lineHeight: "40px", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "34px" }],
        h6: ["22px", { lineHeight: "32px" }],
        h7: ["20px", { lineHeight: "30px" }],
        p1: ["18px", { lineHeight: "30px" }],
        p2: ["16px", { lineHeight: "28px" }],
        p3: ["14px", { lineHeight: "20px" }],
        p4: ["12px", { lineHeight: "16px" }],
        button1: ["18px", { lineHeight: "30px" }],
        button2: ["16px", { lineHeight: "26px" }],
        button3: ["14px", { lineHeight: "20px" }],
      },
      colors: {
        "orange-primary": "#FF9966",
        "pink-primary": "#EDA6E6",
        "yellow-primary": "#FFF480",
        "blue-primary": "#A8EBFF",
        "green-primary": "#66CCA0",
        white: "#FFFFFF",
        "black-primary": "#110B08",
        "grey-primary": "#574F4A",
        light: "#F5F3EA",
        "light-grey": "#E5E5EC",
        "light-yellow": "#fffbd6",
      }
    },
  },
  plugins: [],
};
