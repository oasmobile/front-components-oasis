import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data,options) {
        this.lang = data.lang || 'en';
        this.data = data;
        this.langContent = langPackage[this.lang];
        this.content = `<div id="foot" class="clearfix">
                            <div class="f-logo fl">
                                <a href="//all.oasgames.com" rel="nofollow" target="_blank">
                                    <img src="//www.oasgames.com/resource/widget/footer/white/images/u2.png"><br><img
                                        src="//www.oasgames.com/resource/widget/footer/white/images/u4.png" width="93" height="16"
                                        class="mar-t">
                                </a>
                            </div>
                            <div class="bottext fl">
                                <a target="_blank" href="//company.oasgames.com/en/" rel="nofollow">About US</a>
                                丨<a target="_blank" href="/PrivacyPolicy(EN).html">Privacy Policy </a>
                                丨<a target="_blank" href="/TermsofService(EN).html">Terms of Service</a>
                    
                                丨<a target="_blank" href="http://en.forum.oasgames.com" rel="nofollow"> Forum</a>
                    
                                <p>©2012-2017 OASIS GAMES LIMITED. All rights reserved.</p>
                                <p>All trademarks referenced herein are the properties of their respective owners.</p>
                            </div>
                        </div>`;
        this.swc = `<div class="switch">
                        <div class="current" id="footer_current" style="display: block;">
                            English <img src="https://img.oasgames.com/upload/1503995547.png">
                        </div>
                        <div class="list" id="footer_list" style="display: none;">
                            <div class="language" data-url="/zh">
                                简体中文（ zh ）
                            </div>
                            <div class="language">
                                English <img src="https://img.oasgames.com/upload/1503995535.png">
                            </div>
                        </div>
                    </div>`;
        this.hl = '';
        this.options = options;
    }

    _renderHtml() {
        if (this.options) {
            this.hl = this.content + this.swc;
        } else {
            this.hl = this.content;
        }
        return this.hl;
    }
    fire(id) {
        let rootElement = document.getElementById(id);
        rootElement.innerHTML = this._renderHtml(this.data);
        console.log(rootElement.children)
        if(rootElement.children.length == 2){
            rootElement.className = 'footer_box clearfix';
        }else{
            rootElement.className = '';
        }
    }
}
