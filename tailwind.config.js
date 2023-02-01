/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {

    screens: {
      "lg": {"max": "992px"},
      "md": {"max": "768px"},
      "sm": {"max": "480px"}
    },

    container: {
      
      center:true
    },
    extend: {
      colors : {
        dblue : "#183181",
        bluuue: "#408EC7",
        lgray:"#747474",
        dgray:"#F4F5F7",
        ddgray:"#0B0D17",
        dqdqqd:"#454545"
      }
    },
  },
  plugins: [],
}