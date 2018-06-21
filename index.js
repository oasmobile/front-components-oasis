import './common/base';
import Footer from './components/Footer/js/Footer';
import GDPR from './components/GDPR/js/GDPR';

const footer = (data) => {
    return new Footer(data);
};

const gdpr = (data) => {
    return new GDPR(data);
};

let timeFooterConfig = setInterval(function(){
    if (typeof(fcoFooterConfig) !== 'undefined') {
        footer(fcoFooterConfig);
        clearInterval(timeFooterConfig);
    }
}, 100);
let timeGDPRConfig = setInterval(function () {
    if (typeof(fcoGDPRConfig) !== 'undefined') {
        gdpr(fcoGDPRConfig);
        clearInterval(timeGDPRConfig);
    }
}, 100);


exports = module.exports = {
    FcoFooter: footer,
    FcoGDPR: gdpr
};
