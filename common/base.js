import 'es5-shim';
import 'es5-sham-ie8';

if (NODE_ENV == 'production') {
    console.log = function (msg) {};
}
