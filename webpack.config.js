//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    entry: './public/js/app/main.js',
    output: {
        path: './public/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
               test: /\.js$/,
               include:[path.resolve(__dirname, 'app')],
               loader: 'ng-annotate',
               exclude: /node_modules/
           },
           {
              test: /\.scss$/,
              //loader: ExtractTextPlugin.extract("style", "css!sass"),
              loader: "style-loader!css-loader!sass-loader",
              exclude: /node_modules/
           }
       ],
    },
    // plugins: [
    //     new ExtractTextPlugin("site.css")
    // ]

 };
