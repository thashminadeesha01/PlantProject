/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily:{
          times: ["Times New Roman", "serif"],
        },
        screens:{
          ls:"1530px",
          ex:"2000px",
          bx:"1490px",
          cx:"1300px",
          dx:"1300px",
          fx:"950px",
        }
      },
    },
    plugins: [],
  };

  