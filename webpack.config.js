const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development'
const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const optimization = () => {
  const config = {}
    if (!isDev) {
      config.minimizer = [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    }

  return config
}

module.exports = {
  context: path.join(__dirname, '/src'),
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: filename('js'),
  },
  resolve: {
    extensions: ['.js', '.png'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@modals': path.resolve(__dirname, 'src/modals'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev,
    historyApiFallback: true,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: !isDev
    }),
    new MiniCssExtractPlugin({
      filename: `stylesheets/${filename('css')}`,
      hmr: isDev,
      reloadAll: true
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [{from: path.resolve(__dirname, 'src/assets/icons/favicon.ico'), to: path.relative(__dirname, 'assets/icons/')}],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ["babel-plugin-styled-components", "emotion"]
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|jpg|png|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
