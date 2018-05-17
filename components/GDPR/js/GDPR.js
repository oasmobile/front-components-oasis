import '../css/GDPR.css';
import browser from '../common/browser';
import langPackage from '../js/lang';
import axios from 'axios-jsonp-pro';
import getCookie from '../common/cookie';

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
            this.defaultFireBok = data.defaultFireBok || false;
            this.gameboxBok = data.gameboxBok || false;
            this.cookieCode = getCookie;

            //cookie 检测用户是否登录
            this.intervalCookie();

            if (this.defaultFireBok) {
                this.fire();
            }

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
                                    <td><a href="javascript:;" class="fco-gdpr-btn" id="gdpr-btn">${this.langPackage.gdpr_btn}</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>`;
        this.WAP = `<div class="fco-gdpr-wap-box">
                        <div  class="fco-gdpr-wap-text">
                            <p>
                                <span class="fco-gdpr-wap-text-left">${this.langPackage.gdpr_text}</span>
                                <a href="javascript:;" class="fco-gdpr-wap-btn" id="gdpr-btn">${this.langPackage.gdpr_btn}</a>
                            </p>
                        </div>
                    </div>`;
        //熊哥组 模板特殊处理
        this.gameTpl = `<div class="fco-gdpr-tpl-box">
                        <div class="fco-gdpr-tpl-text">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" >
                                <tr>
                                    <td class="fco-gdpr-text-tpl-left" align="middle"><p>${this.langPackage.gdpr_text}</p>
                                        <a href="javascript:;" class="fco-gdpr-tpl-btn" id="gdpr-btn">${this.langPackage.gdpr_btn}</a>
                                    </td>
                                    
                                </tr>
                            </table>
                        </div>
                    </div>`;
        if (!this.forceBok) {
            try {
                axios.jsonp('http://passport.oasgames.com/index.php?m=getLoginUser').then(function (data) {
                    if (data.status === 'ok') {
                        if (data.val.policy_acceptance === false) {
                            this.loginKey = data.val.loginKey;
                            this.policy_acceptance = data.val.policy_acceptance;
                        }
                        else if (data.val.policy_acceptance === true) {
                            this.fcogdprfinished();
                            return;
                        }
                    }
                    //判断用户有没有点击过知道了这个按钮
                    if (this.policy_acceptance === false) {
                        //检测设备
                        this.addContent();
                    }
                }.bind(this));
            }
            catch(e) {
                this.fcogdprfinished();
                console.log('[FcoGDPR] passport get login user error!!!');
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
        } else {
            //检测设备
            if (this.cookieCode('force_code') === 1) {
                this.addContent();
            }

        }
    }

    GDPRBox(content) {
        let Body = document.body,
            gdpr = document.createElement('div');
        gdpr.setAttribute('id', 'fco-gdpr');
        gdpr.innerHTML = content;
        Body.appendChild(gdpr);
    }

    clickFn() {
        let oBtn = document.getElementById('gdpr-btn'),
            gapr = document.getElementById('fco-gdpr');

        oBtn.onclick = function () {
            let paramsString = "passport_jwt=" + this.loginKey;
            let searchParams = new URLSearchParams(paramsString);
            if (this.forceBok) {
                if(this.cookieCode('force_code')){

                }
                gapr.style.display = 'none';
                return false;
            }

            try {
                axios.post('http://passport.oasgames.com/profile/policy-accept', searchParams).then(function () {
                    gapr.style.display = 'none';
                    this.policy_acceptance = true;
                }.bind(this));
            }
            catch(e) {
                console.log('[FcoGDPR] passport policy accept error!!!');
            }
            finally
            {
                this.fcogdprfinished();
            }
        }.bind(this);
    }

    addContent() {
        if(this.gameboxBok){
            this.GDPRBox(this.gameTpl);
            this.clickFn();
            return false;
        }
        if (this.browser.versions.mobile || this.browser.versions.ios || this.browser.versions.android ||
            this.browser.versions.iPhone || this.browser.versions.iPad) {
            this.GDPRBox(this.WAP);
            this.clickFn();
        } else {
            this.GDPRBox(this.PC);
            this.clickFn();
        }
    }

    fcogdprfinished() {
        let event = new CustomEvent('fcogdprfinished');
        window.dispatchEvent(event);
    }

    intervalCookie() {
        this.time = setInterval(function () {
            if (this.cookieCode('oauth_saved_token')) {
                this.fire();
                clearInterval(this.time);
            }
        }.bind(this),1000);
    }
}

GDPR.gdprBok = false;

export default GDPR;
