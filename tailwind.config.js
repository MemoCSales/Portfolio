/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        mono: ["Ubuntu Mono", "monospace"],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(98, 186, 27, 0.5)', // Using your accent color (#62BA1B)
        'glow-hover': '0 0 20px rgba(98, 186, 27, 0.7)',
      },
      colors: {
        primary: "#171717",
        secondary: "#262626",
        accent: "#62BA1B",
        text: "#9ca3af",
        "text-light": "#f3f4f6",
      },
      spacing: {
        section: "100vh",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
