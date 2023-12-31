module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mont": ["Montserrat", "sans-serif"],
        "pop": ["Poppins", "sans-serif"],
        "rob": ['Roboto', "sans-serif"]
      },
      colors: {
        pc: "#FA4A0C",
        hr: "background: rgba(228, 228, 228, 1)",
        darkBlue: "#252B42"
      },
      boxShadow: {
        '3xl': '0px 4px 30px 0px rgba(0, 0, 0, 0.06)',
        'profile': '0px 10px 40px 0px rgba(0, 0, 0, 0.03)',
        'tabitem': '0px 30px 60px 0px rgba(57, 57, 57, 0.01)'
      }
    },
  },
  plugins: [],
}

