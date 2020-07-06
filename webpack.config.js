const path = require("path");

const config = {
  entry: "./public/assets/src/entry.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production"
}



module.exports = config;