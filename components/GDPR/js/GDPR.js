import '../css/GDPR.css';
import browser from '../common/browser';
import langPackage from '../js/lang';
import axios from 'axios-jsonp-pro';

class GDPR {
    constructor(data) {
        if (GDPR.gdprBok === false) {
            this.lang = data.lang || 'en';
            this.langPackage = langPackage[this.lang];
            if (this.langPackage === undefined) {
                this.lang = 'en';
                this.langPackage = langPackage[this.lang];
            }
            this.browser = browser;
            this.fire();
            this.loginKey = '';
            this.policy_acceptance = '';
        }

        GDPR.gdprBok = true;
    }

    fire() {
        this.PC = `<div class="fco-gdpr-box">
                        <div class="fco-gdpr-text">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" >
                                <tr>
                                    <td class="fco-gdpr-text-left" align="middle">${this.langPackage.gdpr_text}</td>
                                    <td><a href="javascript:;" class="fco-gdpr-btn gdpr-btn">${this.langPackage.gdpr_btn}</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>`;
        this.WAP = `<div class="fco-gdpr-wap-box">
                        <div  class="fco-gdpr-wap-text">
                            <p>
                                <span class="fco-gdpr-wap-text-left">${this.langPackage.gdpr_text}</span>
                                <a href="javascript:;" class="fco-gdpr-wap-btn gdpr-btn">${this.langPackage.gdpr_btn}</a>
                            </p>
                        </div>
                    </div>`;

        axios.jsonp('https://passport.oasgames.com/index.php?m=getLoginUser').then(function (data) {
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

            axios.post('https://passport.oasgames.com/profile/policy-accept', searchParams).then(function () {
                gapr.style.display = 'none';
                this.policy_acceptance = true;
            }.bind(this));
        }.bind(this)
    }
}

GDPR.gdprBok = false;

export default GDPR;
