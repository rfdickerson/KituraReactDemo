var path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        filename: 'bundle.js',
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
    }
};

module.exports = config;