var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    module: {
        entry: './public/js/app/main.js',
        loaders: [
           {
              test: /\.scss$/,
              //loader: ExtractTextPlugin.extract("style", "css!sass"),
              loader: "style!css!sass",
              exclude: /node_modules/
           }
       ],
    },
    output: {
        path: './public/js',
        filename: 'app.bundle.js'
    },
    // plugins: [
    //     new ExtractTextPlugin("site.css")
    // ]

 };
