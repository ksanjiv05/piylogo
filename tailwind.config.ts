import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-texture":
          "url('https://s3-alpha-sig.figma.com/img/beff/05b3/90ff39f8aa92453f24836453475ea533?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iqz1D6rRuwkXS6Mzfqb9f2wAWptRpOO76smcLUgsA5QgIV1RG6gr6YiQ~Yq3zgqoJKYfbY4nDI0IXk~tUOqSCUxpJtlGyIn13p9QsNx9-Wxd-W899Gdo2XVmijQPeQ01YRg2BJWfQKARRroiV71yaGX1R919P2no1fC13Qnw1I5BV6cGUkqBbNrHbwd505YwnGykgXh3oPxUwYL1zX9CbNt91eRL-S~gw5x3XBT1a2vnKjXIsmjeQMjzXr~YoDB5xDfIPWGkHLP6ZHB1Dl274lkCcJnGkGraCyKTk8Wlvj6fkfsML1aANSxxHqR7EWAasJdhBjWhszb-8jN9PXEMeQ__')",
      },
    },
    fontFamily: {
      lato: ["var(--font-lato)"],
      ebg: ["var(--font-ebg)"],
    },
  },
  plugins: [],
};
export default config;
