import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050811",
        surface: {
          DEFAULT: "#0a0f1e",
          card: "#0d1424",
          elevated: "#121a30",
          border: "rgba(148, 163, 184, 0.12)",
          50: "#151f38",
          100: "#0f172a",
          200: "#0b1120",
          300: "#070b14",
        },
        cyber: {
          cyan: "#00f2fe",
          cyanGlow: "rgba(0, 242, 254, 0.35)",
          purple: "#a855f7",
          purpleGlow: "rgba(168, 85, 247, 0.35)",
          violet: "#8b5cf6",
          blue: "#38bdf8",
          pink: "#f43f5e",
          dark: "#03060f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "mesh-cyber": "radial-gradient(at 0% 0%, rgba(0, 242, 254, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.12) 0px, transparent 50%)",
        "neon-gradient": "linear-gradient(135deg, #00f2fe 0%, #a855f7 50%, #ec4899 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -4px rgba(0, 242, 254, 0.35)",
        "neon-purple": "0 0 25px -4px rgba(168, 85, 247, 0.35)",
        "neon-glow": "0 0 30px -5px rgba(0, 242, 254, 0.25), 0 0 15px -3px rgba(168, 85, 247, 0.25)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
