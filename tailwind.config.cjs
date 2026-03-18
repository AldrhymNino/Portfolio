module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      animation: {
        "gradient-text": "gradient-text 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-text": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        primary: "#7F56D9", // o el color que prefieras
      },
    },
  },
  plugins: [],
};
