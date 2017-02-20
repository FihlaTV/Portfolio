'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rootDir = path.resolve(__dirname, '..');
const loaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'sass-loader'
  }
];

module.exports = {
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000,
        historyApiFallback: true,
        proxy: {
          "/api": "http://localhost:3000" // proxy all api calls to proper dev port
        }
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        loaders: [
            { loader: 'raw-loader', test: /\.(css|html)$/ },
            {
               test: /\.scss$/,
               exclude: /node_modules/,
               loader: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: loaders,
               }),
           },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin({
           filename: 'vendor.bundle.js',
           minChunks: Infinity,
           name: 'vendor'
       }),
       new HtmlWebpack({
           filename: 'index.html',
           inject: 'body',
           template: path.resolve(rootDir, 'src', 'index.html')
       }),
       new ExtractTextPlugin("site.css")
   ],
   resolve: {
       extensions: [ '.js', '.ts','.scss' ]
   }
};
