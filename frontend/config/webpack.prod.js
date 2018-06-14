const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglyfyjsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },

  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
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
          {loader: "html-loader", options: {mininize: true}}
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
  },

  plugins:[
    new MiniCssExtractPlugin({filename: "[name]-[contenthash].css"}),
    new UglyfyjsPlugin({
      cache: true,
      parallel: true
    })
  ]
};
