import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.from = data.from || '';
        this.year = data.year;
        this.options = data.option || '';
        this.langToCase = this.lang.toLocaleUpperCase();
        this.logoOasgame = data.logoOasgame ||`http://${this.lang}.oasgames.com`;
        this.blank = '';
        this.oasgame = 'oasgames.com/en';
        this.priHref = data.priHref || `https://www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.termSerHref = data.termSerHref || `https://www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.forumHref = data.forumHref || `https://${this.langToCase}.forum.oasgames.com`;
        this.fLogo = 'https://img.oasgames.com/upload/1505731497.png';
        this.footWidth = '609px';
        this.logoMarginT = '0';
        this.forumBok = data.forumBok;
        this._blank();
    }
    _renderHtml() {
        this.langContent = langPackage[this.lang];
        this.forum();
        this.content = `<div id="foot" class="clearfix-footer" style="width:${this.footWidth};">
                            <div class="f-logo fl">
                                <a href="${this.logoOasgame}" ${this.blank}>
                                    <img src="${this.fLogo}" style="margin-top: ${this.logoMarginT};">
                                </a>
                            </div>
                            <div class="bottext fl">
                            <div>
                                <a target="_blank" href="http://${this.oasgame}/company.html" rel="nofollow">${this.langContent.footer_abus}</a>
                                丨<a target="_blank" href="${this.priHref}">${this.langContent.footer_pri}</a>
                                丨<a target="_blank" href="${this.termSerHref}">${this.langContent.footer_term_ser}</a>
                                ${this.forumContent}
                            </div>
                                <p>©2012-${this.year} ${this.langContent.footer_his}</p>
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
        if (this.options === 'ok') {
            this.rootElementID.className = 'footer_box clearfix-footer';
        } else {
            this.rootElementID.className = '';
        }
        if (this.lang === 'zh') {
            this.fLogo = 'https://img.oasgames.com/upload/1505731532.png';
            this.footWidth = '685px';
            this.logoMarginT = '7px';
            this.oasgame = 'oasgames.com/zh';
        }
    }
    forum(){
        if (this.forumBok) {
            this.forumContent = '';
        }else{
            this.forumContent = `<span>丨<a target="_blank" href="${this.forumHref}">${this.langContent.footer_forum}</a></span>`;
        }
    }
    _blank(){
        if(this.logoOasgame === `http://${this.lang}.oasgames.com`){
            this.blank = `target= "_blank"`;
        }
    }
}
