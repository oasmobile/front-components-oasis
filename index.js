import Footer from './components/Footer/js/Footer';
import GDPR from './components/GDPR/js/GDPR';

const footer = (data) => {
    return new Footer(data);
};

const gdpr = (data) => {
    return new GDPR(data);
};

let event = new CustomEvent('fcoready', {'detail': {'footer': footer, 'gdpr': gdpr}});
window.dispatchEvent(event);
