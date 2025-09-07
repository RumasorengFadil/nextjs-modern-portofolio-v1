import type { Config } from "tailwindcss";
const config: Config = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
}

export default config
