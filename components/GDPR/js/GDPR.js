import '../css/GDPR.css';
import axios from '../common/axios';
import browser from '../common/browser';
import langPackage from '../js/lang';
export default class GDPR{
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
                            <span class="fco-gdpr-text-left">Our Privacy Policy is changing. You can view our prive Privacy Policy <a href="#">here</a></span>
                            <a href="javascript:;" class="fco-gdpr-btn gdpr-btn">知道了</a>
                        </p>
                    </div>`;
        this.WAP = `<div class="fco-gdpr-wap-box">
                        <p class="fco-gdpr-wap-text">
                            <span class="fco-gdpr-wap-text-left">Our Privacy Policy is changing. You can view our prive Privacy Policy <a href="#">here</a></span>
                            <a href="javascript:;" class="fco-gdpr-wap-btn gdpr-btn">知道了H5</a>
                        </p>
                    </div>`;
        axios.jsonp('https://passport.oasgames.com/index.php?m=getLoginUser').then(function (data) {
            console.log(data)
            if(data.status === 'ok' && data.val.policy_acceptance ===false){
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
    GDPRBox(content){
        let Body = document.body,
            gdpr = document.createElement('div');
        gdpr.setAttribute('id','fco-gdpr');
        gdpr.innerHTML = content;
        Body.appendChild(gdpr);
    }
    ClickFn() {
        let oBtn = document.querySelector('.gdpr-btn'),
            gapr = document.querySelector('#fco-gdpr');
        oBtn.onclick = function () {
            axios.post('https://passport.oasgames.com/profile/policy-accept',{
                passport_jwt:this.loginKey
            }).then(function (data) {
                gapr.style.display = 'none';
                this.policy_acceptance = true;
            });

        }
    }

}
