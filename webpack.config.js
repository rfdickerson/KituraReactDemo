var path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        filename: 'js/bundle.js',
        path: BUILD_DIR
    },
    module : {
        loaders : [
            {
                test    : /\.jsx?/,
                include : APP_DIR,
                loader  : 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true, 
            beautify: false,
            compress: {
                screw_ie8: true,
                warnings: false 
            },
            comments: false
        })
    ]
};

module.exports = config;