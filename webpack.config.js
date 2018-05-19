/**
 * Created by user on 16/6/2.
 */

const webpack = require('webpack');

module.exports = {
    entry: {
        runtime: './index.js',
        loader: './loader.js',
    },
    output: {
        path: './dist',
        filename: 'scripts/[name].min.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015&compact=false',
                plugins: [
                    "transform-es3-property-literals",
                    "transform-es3-member-expression-literals"
                ]
            }, {
                test: /\.css$/,
                loader: 'style-loader',
            }, {
                test: /\.css$/,
                loader: 'css-loader',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
