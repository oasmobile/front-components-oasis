import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.data = data;
        this.from = data.from || '';
        this.options = data.option;
        this.link_href = data.href || 'http://de.forum.oasgames.com';
        this.lang_toCase = this.lang.toLocaleUpperCase();
    }
    _renderHtml() {
        this.langContent = langPackage[this.lang];
        console.log(this.langContent);
        this.content = `<div id="foot" class="clearfix">
                            <div class="f-logo fl">
                                <a href="//oasgames.com" rel="nofollow" target="_blank">
                                    <img src="https://img.oasgames.com/upload/1505731497.png">
                                </a>
                            </div>
                            <div class="bottext fl">
                            <div>
                                <a target="_blank" href="//company.oasgames.com/en/" rel="nofollow">${this.langContent.footer_abus}</a>
                                丨<a target="_blank" href="https://www.oasgames.com/PrivacyPolicy(${this.lang_toCase}).html">${this.langContent.footer_pri}</a>
                                丨<a target="_blank" href="https://www.oasgames.com/TermsofService(${this.lang_toCase}).html">${this.langContent.footer_term_ser}</a>
                                <span>丨<a target="_blank" href="${this.link_href}">${this.langContent.footer_forum}</a></span>
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
