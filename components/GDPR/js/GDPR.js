import '../css/GDPR.css';
import browser from '../common/browser';
import langPackage from '../js/lang';
import axios from 'axios-jsonp-pro';

export default class GDPR {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.langPackage = langPackage[this.lang];
        this.browser = browser;
        this._renderHtml();
        this.loginKey = '';
        this.policy_acceptance = '';
    }

    _renderHtml() {
        this.PC = `<div class="fco-gdpr-box">
                        <p class="fco-gdpr-text">
                            <span class="fco-gdpr-text-left">${this.langPackage.gdpr_text}</span>
                            <a href="javascript:;" class="fco-gdpr-btn gdpr-btn">${this.langPackage.gdpr_btn}</a>
                        </p>
                    </div>`;
        this.WAP = `<div class="fco-gdpr-wap-box">
                        <p class="fco-gdpr-wap-text">
                            <span class="fco-gdpr-wap-text-left">${this.langPackage.gdpr_text}</span>
                            <a href="javascript:;" class="fco-gdpr-wap-btn gdpr-btn">${this.langPackage.gdpr_btn}</a>
                        </p>
                    </div>`;

        axios.jsonp('http://passport.oasgames.com/index.php?m=getLoginUser').then(function (data) {
            if (data.status === 'ok' && data.val.policy_acceptance === false) {
                this.loginKey = data.val.loginKey;
                this.policy_acceptance = data.val.policy_acceptance;
            }
            //判断用户有没有点击过知道了这个按钮
            if (this.policy_acceptance === false) {
                //检测设备
                if (this.browser.versions.mobile || this.browser.versions.ios || this.browser.versions.android ||
                    this.browser.versions.iPhone || this.browser.versions.iPad) {
                    // px2rem();
                    this.GDPRBox(this.WAP);
                    this.ClickFn();

                } else {
                    this.GDPRBox(this.PC);
                    this.ClickFn();
                }
            }
        }.bind(this));
    }

    GDPRBox(content) {
        let Body = document.body,
            gdpr = document.createElement('div');
        gdpr.setAttribute('id', 'fco-gdpr');
        gdpr.innerHTML = content;
        Body.appendChild(gdpr);
    }

    ClickFn() {
        let oBtn = document.querySelector('.gdpr-btn'),
            gapr = document.querySelector('#fco-gdpr');
        oBtn.onclick = function () {
            let paramsString = "passport_jwt=" + this.loginKey;
            let searchParams = new URLSearchParams(paramsString);

            axios.post('http://passport.oasgames.com/profile/policy-accept', searchParams).then(function () {
                gapr.style.display = 'none';
                this.policy_acceptance = true;
            }.bind(this));
        }.bind(this)
    }
}
