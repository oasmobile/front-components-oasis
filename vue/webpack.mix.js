let mix = require('laravel-mix');

mix.js('index.js', 'dist/index.min.js');

mix.setPublicPath('dist');

mix.webpackConfig({
    output: {
        library: 'fco',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
});
