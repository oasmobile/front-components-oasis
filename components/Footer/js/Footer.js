import '../css/footer.css';
import langPackage from '../js/lang'

class Footer {
    constructor(data) {
        this.lang = data.lang  ||  'en';
        this.langContent = langPackage[this.lang];
        if (this.langContent === undefined) {
            this.lang = 'en';
            this.langContent = langPackage[this.lang];
        }
        this.from = data.from  ||  '';
        this.date = new Date;
        this.year = this.date.getFullYear();
        this.options = data.options  ||  '';
        this.langToCase = this.lang.toLocaleUpperCase();
        this.logoOasgame = data.logoOasgame  ||  `//${this.lang}.oasgames.com`;
        this.oasgame = 'oasgames.com/en';
        this.priHref = data.priHref  ||  `//www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.termSerHref = data.termSerHref  ||  `//www.oasgames.com/TermsofService(${this.langToCase}).html`;
        this.forumHref = data.forumHref  ||  `//${this.langToCase}.forum.oasgames.com`;
        this.privacyHref = data.privacyHref  ||  `//www.oasgames.com/privacy_control/PrivacyControl(${this.langToCase}).html `;
        this.fLogo = '//img.oasgames.com/upload/1505731497.png';
        this.logoMarginT = '0';
        this.forumBok = data.forumBok  ||  false;
        if(this.langToCase !== 'ZH'){
            this.privacyHref = '//www.oasgames.com/privacy_control/PrivacyControl(EN).html '
        }
        this.priHrefFn();
        this.fire(data.id);
    }

    _renderHtml() {
        this.forum();
        this.content = `<div id="fco-footer-footwrap">
                            <div id="fco-footer-footBox" class="fco-footer-clearfix">
                                <div id="fco-footer-foot" class="fco-footer-clearfix">
                                    <div class="fco-footer-logo fco-footer-fl">
                                        <a href="${this.logoOasgame}" target="_blank">
                                            <img src="${this.fLogo}" style="margin-top: ${this.logoMarginT}; border:none;">
                                        </a>
                                    </div>
                                    <div class="fco-footer-bottext fco-footer-fl">
                                        <div>
                                            <a target="_blank" href="//${this.oasgame}/company.html" rel="nofollow">${this.langContent.footer_abus}</a>
                                             | <a target="_blank" href="${this.priHref}">${this.langContent.footer_pri}</a>
                                             | <a target="_blank" href="${this.termSerHref}">${this.langContent.footer_term_ser}</a> | <a target="_blank" href="${this.privacyHref}">${this.langContent.footer_privacy}</a>
                                            ${this.forumContent}
                                        </div>
                                        <p>©2012-${this.year} ${this.langContent.footer_his}</p>
                                        <p>${this.langContent.footer_notice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        return this.content;
    }

    fire(id) {
        let rootElement = document.getElementById(id);
        this.zhHtml();
        rootElement.innerHTML = this._renderHtml();
    }

    zhHtml() {
        if (this.lang === 'zh') {
            this.fLogo = '//img.oasgames.com/upload/1505731532.png';
            this.logoMarginT = '7px';
            this.oasgame = 'oasgames.com/zh';
            this.priHref = '//www.oasgames.com/PrivacyPolicy(EN).html';
            this.termSerHref = '//www.oasgames.com/TermsofService(EN).html';
        }
        else if (this.lang === 'tw') {
            this.oasgame = 'oasgames.com/zh';
        }
    }

    forum() {
        if (this.forumBok) {
            this.forumContent = `<span> | <a target="_blank" href="${this.forumHref}">${this.langContent.footer_forum}</a></span>`;
        } else {
            this.forumContent = '';
        }
    }

    priHrefFn(){
        this.priArr = ['EN','FR','IT','PL','ZH'];
        for (let i = 0; i < this.priArr.length; i++) {
            if (this.langToCase !== this.priArr[i]) {
                this.priHref = "//www.oasgames.com/PrivacyPolicy(EN).html";
            }
        }

    }
}

module.exports = Footer;
