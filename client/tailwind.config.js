/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        VT323: ["VT323", "serif"],
        Raleway: ["Raleway", "sans"],
        BrunoAceSC: ["Bruno Ace SC", "italic"],
      },
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        border: "rgba(var(--border))",
        copy: "rgba(var(--copy))",
        copylight: "rgba(var(--copylight))",
        copylighter: "rgba(var(--copylighter))",
        primary: "rgba(var(--primary))",
        primarycontent: "rgba(var(--primarycontent))",
        primarylight: "rgba(var(--primarylight))",
        primarydark: "rgba(var(--primarydark))",
        themebtnbg: "rgba(var(--themebtnbg))",
        custompink: "rgba(var(--custompink))",
      },
    },
  },
  plugins: [],
};
