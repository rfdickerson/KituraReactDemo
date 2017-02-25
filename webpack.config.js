var path = require('path');
const webpack = require('webpack');

var I18nPlugin = require('i18n-webpack-plugin');

var languages = {
    "en": null,
    "de": require('./src/client/locale/de.json')
}

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
    }
};

module.exports = config;