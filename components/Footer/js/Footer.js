import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.data = data;
        this.from = data.from || '';
        this.options = data.option;

    }
    _renderHtml() {
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
                            <div>
                                <a target="_blank" href="//company.oasgames.com/en/" rel="nofollow">About US</a>
                                丨<a target="_blank" href="/PrivacyPolicy(EN).html">Privacy Policy </a>
                                丨<a target="_blank" href="/TermsofService(EN).html">Terms of Service</a>
                            </div>
                                <p>©2012-2017 OASIS GAMES LIMITED. All rights reserved.</p>
                                <p>All trademarks referenced herein are the properties of their respective owners.</p>
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
        return  this;
    }
    add(json){
        // 添加链接 内容
        this.alink = [];
        this.linkHml = [];
        let spikLink = document.querySelector('#'+this.Footerwarp+' .bottext');
        for(var item in json){
            this.alink.push(json[item]);
            this.linkHml.push(item);
        }
        for(var i=0; i<this.alink.length; i++){
            let a = document.createElement('a'),
                span = document.createElement('span');
            a.innerHTML = this.linkHml[i]+' ';
            a.href = this.alink[i];
            a.target = '_blank';
            span.innerHTML = '| ';
            span.appendChild(a);
            spikLink.children[0].appendChild(span);
        }

    }
}
