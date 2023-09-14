const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.PORT || 3002;

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.[fullhash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new WebpackPluginServe({
      host: 'localhost',
      port: port,
      historyFallback: true,
      open: true,
      liveReload: false,
      hmr: true,
      static: './dist',
    }),
  ],
  watch: true,
};

