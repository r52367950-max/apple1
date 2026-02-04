/**
 * Sumire Design Tokens (Apple-style restraint)
 * - Colors: soft violet-grays + neutral foundation
 * - Typography: system stacks only
 * - Spacing/Radius/Shadow: quiet, breathable, low-contrast
 */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        lg: "3rem",
      },
      screens: {
        xl: "1200px",
        '2xl': "1360px",
      },
    },
    extend: {
      colors: {
        ink: {
          900: "#111111",
          800: "#1D1D1F",
          700: "#2C2C2E",
        },
        mist: {
          50: "#FFFFFF",
          100: "#F7F7F9",
          200: "#EFEFF3",
          300: "#E4E4EA",
          400: "#D4D4DC",
        },
        sumire: {
          50: "#F5F3FA",
          100: "#EEEAF6",
          200: "#E1DAF0",
          300: "#CEC3E3",
          400: "#B7A8D4",
          500: "#9A8ABF",
          600: "#7D6EA8",
        },
        graphite: {
          50: "#FAFAFB",
          100: "#F1F1F4",
          200: "#E5E5EA",
          300: "#D2D2D7",
          400: "#B8B8BE",
          500: "#9A9AA1",
          600: "#7A7A82",
        },
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "SF Pro Display",
          "SF Pro Text",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      fontSize: {
        display: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["2rem", { lineHeight: "1.25" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.8125rem", { lineHeight: "1.6" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0, 0, 0, 0.08)",
        lift: "0 12px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
