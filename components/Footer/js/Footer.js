import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'zh';
        this.from = data.from || '';
        this.options = data.option;
        this.langToCase = this.lang.toLocaleUpperCase();
        this.abusHref = data.abusHref || `//oasgames.com/en/`;
        this.priHref = data.priHref || `https://www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.termSerHref = data.termSerHref || `https://www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.forumHref = data.forumHref || `http://${this.langToCase}.forum.oasgames.com`;
        this.fLogo = 'https://img.oasgames.com/upload/1505731497.png';
        this.footWidth = '609px';
        this.logoMarginT = '0';
    }
    _renderHtml() {
        this.langContent = langPackage[this.lang];
        this.content = `<div id="foot" class="clearfix" style="width:${this.footWidth};">
                            <div class="f-logo fl">
                                <a href="//oasgames.com" rel="nofollow" target="_blank">
                                    <img src="${this.fLogo}" style="margin-top: ${this.logoMarginT};">
                                </a>
                            </div>
                            <div class="bottext fl">
                            <div>
                                <a target="_blank" href="${this.abusHref}" rel="nofollow">${this.langContent.footer_abus}</a>
                                丨<a target="_blank" href="${this.priHref}">${this.langContent.footer_pri}</a>
                                丨<a target="_blank" href="${this.termSerHref}">${this.langContent.footer_term_ser}</a>
                                <span>丨<a target="_blank" href="${this.forumHref}">${this.langContent.footer_forum}</a></span>
                            </div>
                                <p>©2012-2017 ${this.langContent.footer_his}</p>
                                <p>${this.langContent.footer_notice}</p>
                            </div>
                        </div>`;
        return this.content;
    }
    fire(id) {
        let rootElement = document.getElementById(id);
        this.rootElementID = rootElement;
        this.zhHtml();
        rootElement.innerHTML = this._renderHtml();

    }
    zhHtml() {
        if (this.options == 'ok') {
            this.rootElementID.className = 'footer_box clearfix';
        } else {
            this.rootElementID.className = '';
        }
        if (this.lang == 'zh') {
            this.fLogo = 'https://img.oasgames.com/upload/1505731532.png';
            this.footWidth = '685px';
            this.logoMarginT = '7px';
        }
    }
}
// const Footer = (data) => new Footer(id, time, amount);
// export {marqueeTab};
