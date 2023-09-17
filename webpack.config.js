const path = require('path');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 3002,
    client: { overlay: false },
  },
  entry: {
    main: './src/index.js',
  },
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
      {
        test: /\.(tsx|js|ts|jsx)?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};