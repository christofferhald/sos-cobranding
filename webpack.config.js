var PACKAGE = require("./package.json");
var version = PACKAGE.version;

const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "./assets/js/main." + PACKAGE.version + ".js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: '[path][filename]' + PACKAGE.version + '[ext][query]'
    assetModuleFilename: "[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: {},
            },
          },
        ],
      },

      // https://webpack.js.org/guides/asset-modules/
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },

      {
        test: /\.(svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/svg/[name][ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },

      {
        test: /\.(mp4|m4v|webm)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/video/[name][ext]",
        },
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./../../",
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },

          {
            loader: "sass-loader",
            options: {},
          },
        ],
      },
    ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: false,
    }),
    new HtmlWebPackPlugin({
      template: "./src/sos1.html",
      filename: "sos1.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/sos2.html",
      filename: "sos2.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/sos3.html",
      filename: "sos3.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/sos4.html",
      filename: "sos4.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/codan1.html",
      filename: "codan1.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/codan2.html",
      filename: "codan2.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/codan3.html",
      filename: "codan3.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/codan4.html",
      filename: "codan4.html",
    }),

    new MiniCssExtractPlugin({
      filename: "./assets/css/[name]." + PACKAGE.version + ".css",
      chunkFilename: "./assets/css/[id].[hash].css",
    }),

    new CleanWebpackPlugin(),
  ],

  devServer: {
    port: 8888,
  },
};
