var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        "./lib/Xmas/index.js"
    ],
    resolve: {
        root: [ path.resolve(__dirname, 'lib' ), path.resolve('.'), path.resolve('./lib'), path.resolve('../lib'), path.resolve('../stories') ]
    },
    output: {
        path: 'assets',
        publicPath: '/assets',
        filename: "xmas.js"
    },
    module: {
        loaders: [
             {
            test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: "style!css" },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: [ 'babel'], // 'babel-loader' is also a legal name to reference
    }
        ]
    }
};


