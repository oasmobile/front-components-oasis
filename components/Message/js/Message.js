import browser from '../lang/browser';

class Message {
    constructor(type, lang) {
        if(1)
        {
            // return;
        }

        let currentLang = lang || 'en';
        let langPackage = null;

        switch (type) {
            case 1:
                langPackage = browser[currentLang];
                break;
        }

        this._template(langPackage);
        this._render();
    }

    _template(lang) {
        this._content = `我活了`;
    }

    _close() {

    }

    _render() {
        let message = document.createElement('div');
        message.innerHTML = this._content;
        document.body.appendChild(message);
    }
}

export default Message;
