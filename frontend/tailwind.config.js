/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1f1f4a",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1f2937",
          900: "#0f172a",
          950: "#070a13",
        },
        accent: {
          500: "#22c55e",
          600: "#16a34a",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.18), 0 10px 30px rgba(99,102,241,0.22)",
        soft: "0 10px 30px rgba(2,6,23,0.10)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px circle at 20% 10%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(900px circle at 85% 30%, rgba(34,197,94,0.20), transparent 60%), radial-gradient(1000px circle at 40% 110%, rgba(56,189,248,0.16), transparent 55%)",
        "brand-gradient":
          "linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(34,197,94,1) 100%)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

