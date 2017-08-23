/**
 * Created by user on 16/6/2.
 */

var webpack = require('webpack');

module.exports = {
    entry: {
        test: './test.js'
    },
    output: {
        path: './dist',
        filename: '[name].min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015&compact=false'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    vue: {
        loaders: {
            // same configuration rules as above
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'" + process.env.NODE_ENV + "'"
            }
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
