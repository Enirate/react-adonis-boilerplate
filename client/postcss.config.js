const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: ["./src/**/*.js"],
        css: ["./src/**/*.css"]
      })
  ]
};
