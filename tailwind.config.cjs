/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#1C39BB",
      },
      fontFamily: {
        sans: ["JetBrains Mono"],
        mono: ["JetBrains Mono"],
      },
      fontSize: {
        base: "1.3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
