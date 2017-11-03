/**
 * Created by user on 16/6/2.
 */

module.exports = {
    entry: {
        test: './test.js'
    },
    output: {
        path: './dist',
        filename: 'scripts/[name].min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015&compact=false'
            }, {
                test: /\.css$/,
                loader: 'style-loader',
            }, {
                test: /\.css$/,
                loader: 'css-loader',
            }
        ]
    }
};
