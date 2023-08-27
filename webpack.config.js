const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: ['./src/index.js','webpack-plugin-serve/client'],
  output: {
    filename: 'bundle.[fullhash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                mode: 'local',
                exportLocalsConvention: 'camelCaseOnly',
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new WebpackPluginServe({
      host: 'localhost',
      port: port,
      historyFallback: false,
      open: true,
      liveReload: true,
      hmr: true,
      static: './dist',
    }),
  ],
  watch: true,
};

