 module.exports = function(){
     return {
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
                   exclude: /node_modules/,
                   loader: ExtractTextPlugin.extract({
                       fallbackLoader: 'style-loader',
                       loader: loaders,
                   }),
                }
            ],
         },
         //devtool: 'source-map',
         plugins: [
             new ExtractTextPlugin("site.css")
         ]

      };
 }
