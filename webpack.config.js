/**
 * Created by user on 16/6/2.
 */

const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');

let env = JSON.stringify(process.env.NODE_ENV);
let plugins = [
    new webpack.DefinePlugin({
        'NODE_ENV': env
    }),
    new es3ifyPlugin()
];

if (env === '"production"' || env === '"productiont"') {
    plugins = [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {screw_ie8: false},
            output: {screw_ie8: false},
            mangle: {
                screw_ie8: false
            },
            support_ie8: true

        }),
        new es3ifyPlugin()
    ];
}

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
    plugins: plugins
};

if (env === '"developmentt"' || env === '"productiont"') {
    module.exports.entry = {message: './message.js'};
}
