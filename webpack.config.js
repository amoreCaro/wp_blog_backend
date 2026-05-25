const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const htmlFiles = fs.readdirSync('./src/html').filter(file => file.endsWith('.html'));

module.exports = {
  mode: 'development',

  entry: {
    main: './src/js/main.js',
    main_css: './src/css/main.css',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },

      {
        test: /\.(mp4|webm|ogg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'video/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new RemoveEmptyScriptsPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),

    ...htmlFiles.map(file =>
      new HtmlWebpackPlugin({
        template: `./src/html/${file}`,
        filename: file,
        inject: 'body',
      })
    ),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images'),
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(__dirname, 'src/video'),
          to: path.resolve(__dirname, 'dist/video'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
};