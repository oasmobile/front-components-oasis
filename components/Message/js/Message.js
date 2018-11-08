import '../css/message.css';
import compatibility from '../lang/compatibility';
import browser from '../commom/browser';

class Message {
    constructor(type, lang) {
        //非IE7/IE8/IE9 不进行弹窗提示
        if (!browser.browserVersion.IE7 && !browser.browserVersion.IE8 && !browser.browserVersion.IE9) {
            return;
        }

        //捕获url?后fco_message_lang的值 切换多语言
        if (window.location.search) {
            lang = Message._param('fco_message_lang');
        }

        let currentLang = lang || 'en';
        let langPackage = null;

        switch (type) {
            case 1:
                langPackage = compatibility[currentLang];
                break;
        }

        this._template(langPackage);
        this._render();
        this._close();
    }

    _template(lang) {
        this._content = `${lang.message_text}<a href="https://www.google.com/chrome/" target="_blank" id="download">${lang.message_down}</a><img id="close" src="//img.oasgames.com/upload/1541500307.png"/>`;
    }

    _close() {
        let oBtn = document.getElementById("close"),
            oMessage = document.getElementById('message');

        oBtn.onclick = function () {
            oMessage.style.display = "none";
        }
    }

    _render() {
        let message = document.createElement('div');

        message.setAttribute('id', 'message');
        message.innerHTML = this._content;
        document.body.appendChild(message);
    }

    static _param(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);

        if (r != null) return unescape(r[2]);
        return null;
    }
}

export default Message;
