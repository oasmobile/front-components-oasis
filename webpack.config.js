/**
 * Created by user on 16/6/2.
 */

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './components/runtime.js',
    output: {
        path: './dist',
        filename: 'scripts/runtime.min.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015&compact=false'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].min.css"),
    ],
};
