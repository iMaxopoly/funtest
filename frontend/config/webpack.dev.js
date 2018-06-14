const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },

  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  devServer: {
    overlay: true,
    contentBase: "dist"
  },

  module: {
    rules: [
      // js/jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {extensions: [".js", ".jsx"]},
        use: [
          {loader: "babel-loader"}
        ]
      },

      // html
      {
        test: /\.html$/,
        use: [
          {loader: "file-loader", options: {name: "[name].html"}},
          "extract-loader",
          "html-loader"
        ]
      },

      // scss
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader",
          {
            loader: "postcss-loader", options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")(),
                require("cssnano")()
              ]
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },

      // images
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{loader: "file-loader", options: {name: "images/[name].[ext]"}}]
      }
    ]
  }
};
