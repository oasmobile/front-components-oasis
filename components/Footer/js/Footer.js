import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.langContent = langPackage[this.lang];
        if (this.langContent === undefined) {
            this.lang = 'en';
            this.langContent = langPackage[this.lang];
        }
        this.from = data.from || '';
        this.date = new Date;
        this.year = this.date.getFullYear();
        this.options = data.options || '';
        this.langToCase = this.lang.toLocaleUpperCase();
        this.logoOasgame = data.logoOasgame || `http://${this.lang}.oasgames.com`;
        this.oasgame = 'oasgames.com/en';
        this.priHref = data.priHref || `https://www.oasgames.com/PrivacyPolicy(${this.IsLo()}).html`;
        this.termSerHref = data.termSerHref || `https://www.oasgames.com/TermsofService(${this.langToCase}).html`;
        this.forumHref = data.forumHref || `http://${this.langToCase}.forum.oasgames.com`;
        this.fLogo = 'https://img.oasgames.com/upload/1505731497.png';
        this.footWidth = '609px';
        this.footMinWidth = '609px';
        this.logoMarginT = '0';
        this.forumBok = data.forumBok || false;
        this.backgroundColor = data.backgroundColor || '#000';
    }

    _renderHtml() {
        this.forum();
        this.content = `<div id="fco-footer-footwrap" style="background-color: ${this.backgroundColor};min-width:${this.footMinWidth}">
                            <div id="fco-footer-footBox" class="fco-footer-clearfix">
                                <div id="fco-footer-foot" class="fco-footer-clearfix" style="width:${this.footWidth};">
                                    <div class="fco-footer-logo fco-footer-fl">
                                        <a href="${this.logoOasgame}" target="_blank">
                                            <img src="${this.fLogo}" style="margin-top: ${this.logoMarginT}; border:none;">
                                        </a>
                                    </div>
                                    <div class="fco-footer-bottext fco-footer-fl">
                                        <div>
                                            <a target="_blank" href="http://${this.oasgame}/company.html" rel="nofollow">${this.langContent.footer_abus}</a>
                                            丨<a target="_blank" href="${this.priHref}">${this.langContent.footer_pri}</a>
                                            丨<a target="_blank" href="${this.termSerHref}">${this.langContent.footer_term_ser}</a>
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
            this.fLogo = 'https://img.oasgames.com/upload/1505731532.png';
            this.footWidth = '685px';
            this.footMinWidth = '685px';
            this.logoMarginT = '7px';
            this.oasgame = 'oasgames.com/zh';
            this.priHref = 'https://www.oasgames.com/PrivacyPolicy(EN).html';
            this.termSerHref = 'https://www.oasgames.com/TermsofService(EN).html';
        }
        else if (this.lang === 'tw') {
            this.oasgame = 'oasgames.com/zh';
        }
    }

    forum() {
        if (this.forumBok) {
            this.forumContent = `<span>丨<a target="_blank" href="${this.forumHref}">${this.langContent.footer_forum}</a></span>`;
        } else {
            this.forumContent = '';
        }
    }

    IsLo() {
        this.LO = ['PL', 'PT', 'RU', 'TR'];
        this.langCase = this.langToCase;
        for (let i = 0; i < this.LO.length; i++) {
            if (this.langToCase === this.LO[i]) {
                this.langCase = 'LO-' + this.langToCase;
            }
        }
        return this.langCase;
    }
}
