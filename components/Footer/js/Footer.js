import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.from = data.from || '';
        this.options = data.option;
        this.lang_toCase = this.lang.toLocaleUpperCase();
        this.abus_href = data.abus_href || `//oasgames.com/en/`;
        this.pri_href = data.pri_href || `https://www.oasgames.com/PrivacyPolicy(${this.lang_toCase}).html`;
        this.term_ser_href = data.term_ser_href || `https://www.oasgames.com/PrivacyPolicy(${this.lang_toCase}).html`;
        this.forum_href = data.forum_href || `http://${this.lang_toCase}.forum.oasgames.com`;
    }
    _renderHtml() {
        this.langContent = langPackage[this.lang];
        this.content = `<div id="foot" class="clearfix">
                            <div class="f-logo fl">
                                <a href="//oasgames.com" rel="nofollow" target="_blank">
                                    <img src="https://img.oasgames.com/upload/1505731497.png">
                                </a>
                            </div>
                            <div class="bottext fl">
                            <div>
                                <a target="_blank" href="${this.abus_href}" rel="nofollow">${this.langContent.footer_abus}</a>
                                丨<a target="_blank" href="${this.pri_href}">${this.langContent.footer_pri}</a>
                                丨<a target="_blank" href="${this.term_ser_href}">${this.langContent.footer_term_ser}</a>
                                <span>丨<a target="_blank" href="${this.forum_href}">${this.langContent.footer_forum}</a></span>
                            </div>
                                <p>©2012-2017 ${this.langContent.footer_his}</p>
                                <p>${this.langContent.footer_notice}</p>
                            </div>
                        </div>`;
        return this.content;
    }
    fire(id) {
        let rootElement = document.getElementById(id);
        this.Footerwarp = id;
        rootElement.innerHTML = this._renderHtml();
        if(this.options == 'ok'){
            rootElement.className = 'footer_box clearfix';
        }else{
            rootElement.className = '';
        }
        if(this.lang == 'zh'){
            this.f_logo = document.querySelector('.f-logo img');
            this.f_logo.src = 'https://img.oasgames.com/upload/1505731532.png';
            document.querySelector('#foot').style.width = '685px';
            this.f_logo.style.marginTop = '7px';
        }
    }
}
