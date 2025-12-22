/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "deep-blue": "#1a2a47",
        "midnight-blue": "#0f172a",
        navy: "#152238",
        gold: "#e9b949",
        orange: "#e67e22",
        "light-orange": "#f39c12",
        burgundy: "#800020",
        "burgundy-light": "#9a2a3a",
        "off-white": "#f8f9fa",
        "light-gray": "#e2e8f0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, rgba(26, 42, 71, 0.9), rgba(15, 23, 42, 0.8)), url('/hero-bg.jpg')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        twinkle: "twinkle 5s ease-in-out infinite",
        "shooting-star": "shooting-star 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        "shooting-star": {
          "0%": { transform: "translateX(0) translateY(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { transform: "translateX(500px) translateY(500px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
