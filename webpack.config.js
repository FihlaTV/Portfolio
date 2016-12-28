var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var loaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'sass-loader'
  }
];
module.exports = function(){
    return {
        entry: {
            main:'./public/js/app/main.js',
            player: './public/js/app/player.js'
        },
        output: {
            path: './public/js',
            filename: '[name].bundle.js'
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
                  exclude: /node_modules/,
                  loader: ExtractTextPlugin.extract({
                      fallbackLoader: 'style-loader',
                      loader: loaders,
                  }),
                //   loader: "style-loader!css-loader!sass-loader",
               }
           ],
        },
        devtool: 'source-map',
        plugins: [
            new ExtractTextPlugin("site.css"),
            new webpack.ProvidePlugin({
               'jQuery': 'jquery',
               '$': 'jquery',
               'global.jQuery': 'jquery',
               '_':'underscore'
           })
        ]

     };
}
