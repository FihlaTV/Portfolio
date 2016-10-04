//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './public/js/app/main.js',
    output: {
        path: './public/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
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
