import '../css/GDPR.css';
import browser from '../common/browser';
import langPackage from '../js/lang';
import ajax from '../../../common/ajax';
import {getCookie, setCookie} from '../common/cookie';

class GDPR {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.langPackage = langPackage[this.lang];
        if (this.langPackage === undefined) {
            this.lang = 'en';
            this.langPackage = langPackage[this.lang];
        }
        this.browser = browser;
        this.forceBok = data.forceBok || false;
        this.defaultFireBok = typeof(data.defaultFireBok) === 'undefined' ? true : data.defaultFireBok;
        this.gameboxBok = data.gameboxBok || false;
        this.loginKey = '';
        this.policy_acceptance = '';
        this.getCookie = getCookie;
        this.setCookie = setCookie;
        this.loginCallback = data.loginCallback || function () {
        };

        if (GDPR.gdprBok === false) {
            if (this.defaultFireBok) {
                this.fire(true);
            }
        }

        GDPR.gdprBok = true;
    }

    fire(bok) {
        this.PC = `<div class="fco-gdpr-box">
                        <div class="fco-gdpr-text">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" >
                                <tr>
                                    <td class="fco-gdpr-text-left" align="middle">${this.langPackage.gdpr_text}</td>
                                    <td class="fco-gdpr-text-right"><a href="javascript:;" class="fco-gdpr-btn" id="gdpr-btn">${this.langPackage.gdpr_btn}</a></td>
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

            if (bok) {
                this.time = setInterval(function () {
                    if (this.getCookie('oas_user')) {
                        clearInterval(this.time);
                        this.noIntervalFire();
                    }
                }.bind(this), 200);
            } else {
                this.noIntervalFire();
            }

            //判断用户有没有点击过知道了这个按钮
            if (this.policy_acceptance === false) {
                //检测设备
                if (this.browser.versions.mobile || this.browser.versions.ios || this.browser.versions.android ||
                    this.browser.versions.iPhone || this.browser.versions.iPad) {
                    // px2rem();
                    this.GDPRBox(this.WAP);
                    this.clickFn();

                } else {
                    this.GDPRBox(this.PC);
                    this.clickFn();
                }
            }
        } else {
            //检测设备
            if (this.getCookie('fcogdpr_force_code') !== '0') {
                this.addContent();
            } else {
                this.setCookie('fcogdpr_force_code', 0);
            }

        }
    }

    GDPRBox(content) {
        let Body = document.body,
            gdpr = document.createElement('div'),
            gdprMask = document.createElement('div');
        gdpr.setAttribute('id', 'fco-gdpr');
        gdprMask.setAttribute('id', 'fco-gdpr-mask');
        gdpr.innerHTML = content;
        Body.appendChild(gdprMask);//遮罩
        Body.appendChild(gdpr);
    }

    clickFn() {
        let oBtn = document.getElementById('gdpr-btn'),
            gaprMask = document.getElementById('fco-gdpr-mask'),
            gapr = document.getElementById('fco-gdpr');
        oBtn.onclick = function () {
            let paramsString = {"passport_jwt" : this.loginKey};
            // let searchParams = new URLSearchParams(paramsString);
            if (this.forceBok) {
                this.setCookie('fcogdpr_force_code', 0);
                gapr.style.display = 'none';
                gaprMask.style.display = 'none';
                return false;
            }
            try {

                ajax.post('//passport.oasgames.com/profile/policy-accept', paramsString,function () {
                    gapr.style.display = 'none';
                    gaprMask.style.display = 'none';
                    this.policy_acceptance = true;
                }.bind(this));
            }
            catch (e) {
                console.error(e);
                console.error('[FcoGDPR] passport policy accept error!!!');
            }
            finally {
                this.fcogdprfinished();
            }
        }.bind(this);
    }

    addContent() {
        if (this.gameboxBok) {
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
        this.loginCallback();
    }

    noIntervalFire() {
        try {
            ajax.getJSON('//passport.oasgames.com/index.php?m=getLoginUser',null,function (err,data) {
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
        catch (e) {
            console.error(e);
            this.fcogdprfinished();
            console.error('[FcoGDPR] passport get login user error!!!');
        }
    }
}

GDPR.gdprBok = false;

export default GDPR;
