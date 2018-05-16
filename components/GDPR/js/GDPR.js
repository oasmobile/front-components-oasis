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
            this.forceBok = data.forceBok || false;
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
        if(!this.forceBok){
            axios.jsonp('http://passport.oasgames.com/index.php?m=getLoginUser').then(function (data) {
                if (data.status === 'ok' && data.val.policy_acceptance === false) {
                    this.loginKey = data.val.loginKey;
                    this.policy_acceptance = data.val.policy_acceptance;
                }
                //判断用户有没有点击过知道了这个按钮
                if (this.policy_acceptance === false) {
                    //检测设备
                    this.AddContent();
                }
            }.bind(this));
        }else{
            //检测设备
            this.AddContent();
        }
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
            if(this.forceBok){
                gapr.style.display = 'none';
                return false;
            }
            axios.post('http://passport.oasgames.com/profile/policy-accept', searchParams).then(function () {
                gapr.style.display = 'none';
                this.policy_acceptance = true;
            }.bind(this));
        }.bind(this)
    }
    AddContent() {
        if (this.browser.versions.mobile || this.browser.versions.ios || this.browser.versions.android ||
            this.browser.versions.iPhone || this.browser.versions.iPad) {
            this.GDPRBox(this.WAP);
            this.ClickFn();

        } else {
            this.GDPRBox(this.PC);
            this.ClickFn();
        }
    }
}

GDPR.gdprBok = false;

export default GDPR;
