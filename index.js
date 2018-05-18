import './common/base';
import Footer from './components/Footer/js/Footer';
import GDPR from './components/GDPR/js/GDPR';

const footer = (data) => {
    return new Footer(data);
};

const gdpr = (data) => {
    return new GDPR(data);
};

exports = module.exports = {
    FcoFooter: footer,
    FcoGDPR: gdpr
};
