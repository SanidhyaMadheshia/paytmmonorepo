// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config : {
        
        content : [
          "./**/*.{js,ts,jsx,tsx}",
          "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
        ]
      }
    },
  },
};
export default config;