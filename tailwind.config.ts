import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#06060F",
          elevated: "#0D0C1D",
          soft: "#13122A",
          card: "#0F0E1E",
        },
        ink: {
          DEFAULT: "#F0EFFF",
          muted: "#8B89B0",
          faint: "#4A4870",
        },
        brand: {
          violet: "#7C5CFC",
          indigo: "#5B3FE4",
          pink: "#E040FB",
          cyan: "#00D4FF",
          amber: "#F59E0B",
          emerald: "#10B981",
          rose: "#F43F5E",
          deep: "#3B1FA8",
          glow: "#B49DFF",
        },
        // Per-category accent palette used by immersive portfolio sections
        cat: {
          web: "#00D4FF",
          mobile: "#7C5CFC",
          dashboard: "#10B981",
          erp: "#F59E0B",
          ai: "#E040FB",
          custom: "#F43F5E",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        cairo: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7C5CFC 0%, #5B3FE4 60%, #3B1FA8 100%)",
        "radial-glow": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,92,252,0.30), transparent)",
        "radial-glow-sm": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,92,252,0.20), transparent)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(124,92,252,0.55)",
        "glow-sm": "0 0 30px -8px rgba(124,92,252,0.40)",
        "glow-cyan": "0 0 60px -15px rgba(0,212,255,0.45)",
        "glow-pink": "0 0 60px -15px rgba(224,64,251,0.45)",
        "glow-amber": "0 0 60px -15px rgba(245,158,11,0.45)",
        "glow-emerald": "0 0 60px -15px rgba(16,185,129,0.45)",
        "glow-rose": "0 0 60px -15px rgba(244,63,94,0.45)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 3s",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
