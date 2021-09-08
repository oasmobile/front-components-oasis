import "../css/footer.css";
import langPackage from "../js/lang";
import browser from "../../GDPR/common/browser";

class Footer {
    constructor(data) {
        this.lang = data.lang || "en";
        this.langContent = langPackage[this.lang];
        if (this.langContent === undefined) {
            this.lang = "en";
            this.langContent = langPackage[this.lang];
        }
        this.from = data.from || "";
        this.footerBottomLang = this.lang;
        this.date = new Date();
        this.browser = browser;
        this.year = this.date.getFullYear();
        this.options = data.options || "";
        this.langToCase = this.lang.toLocaleUpperCase();
        this.logoOasgame = data.logoOasgame || `//${this.lang}.oasgames.com`;
        this.oasgame = "oasgames.com/pc/en";
        this.priHref =
            data.priHref ||
            `//www.oasgames.com/PrivacyPolicy(${this.langToCase}).html`;
        this.termSerHref =
            data.termSerHref ||
            `//www.oasgames.com/TermsofService(${this.langToCase}).html`;
        this.forumHref =
            data.forumHref || `http://${this.langToCase}.forum.oasgames.com`;
        this.privacyHref =
            data.privacyHref ||
            `//www.oasgames.com/privacy_control/PrivacyControl(${
                this.langToCase
            }).html `;
        this.cookiesPolicyHref =
            data.cookiesPolicyHref ||
            `//www.oasgames.com/CookiesPolicy(${this.langToCase}).html`;
        this.billHref =
            data.billHref || `//www.oasgames.com/bill/Bill(JA).html`;
        this.fLogo = "//img.oasgames.com/upload/1505731497.png";
        this.logoMarginT = "0";
        this.forumBok = data.forumBok || false;
        this.billBok = data.billBok || false;
        this.cookiesPolicyBok = data.cookiesPolicyBok || false;
        this.fire(data.id);
    }

    _renderHtml() {
        this.forum();
        this.content = `<div id="fco-footer-footwrap">
                            <div id="fco-footer-footBox" class="fco-footer-clearfix">
                                <div id="fco-footer-foot" class="fco-footer-clearfix">
                                    <div class="fco-footer-logo fco-footer-fl">
                                        <a href="${
                                            this.logoOasgame
                                        }" target="_blank">
                                            <img src="${
                                                this.fLogo
                                            }" style="margin-top: ${
            this.logoMarginT
        }; border:none;">
                                        </a>
                                    </div>
                                    <div class="fco-footer-bottext fco-footer-fl">
                                        <div>
                                            <a target="_blank" href="//${
                                                this.oasgame
                                            }/company.html" rel="nofollow">${
            this.langContent.footer_abus
        }</a>
                                             | <a target="_blank" href="${
                                                 this.priHref
                                             }">${
            this.langContent.footer_pri
        }</a>
                                             | <a target="_blank" href="${
                                                 this.termSerHref
                                             }">${
            this.langContent.footer_term_ser
        }</a> | <a target="_blank" href="${this.privacyHref}">${
            this.langContent.footer_privacy
        }</a>
                                            ${this.forumContent}
                                            ${this.billContent}
                                            ${this.cookiesPolicyContent}
                                        </div>
                                        <p>©2012-${this.year} ${
            this.langContent.footer_his
        }</p>
                                        <p>${this.langContent.footer_notice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        this.wapContent = `<div id="fco-wap-footerwrap" class="fco-wap-footerwrap">
            <div class="fco-wap-footerwrap-con">
                 <img src="//img.oasgames.com/upload/1527834447/img/logo_bottom_${
                     this.footerBottomLang
                 }.png" alt="">
                <div class="footer-wap-href">
                    <a target="_blank" href="//${
                        this.oasgame
                    }/company.html" rel="nofollow">${
            this.langContent.footer_abus
        }</a> |
                    <a target="_blank" href="${this.priHref}">${
            this.langContent.footer_pri
        }</a> |
                    <a target="_blank" href="${this.termSerHref}">${
            this.langContent.footer_term_ser
        }</a> |
                    <a target="_blank" href="${this.privacyHref}">${
            this.langContent.footer_privacy
        }</a>
                    ${this.forumContent}
                    ${this.billContent}
                    ${this.cookiesPolicyContent}
                </div>
                <p>©2012-${this.year} ${this.langContent.footer_his}</p>
                <p>${this.langContent.footer_notice}</p>
            </div>

        </div>`;

        //检测设备
        if (
            this.browser.versions.mobile ||
            this.browser.versions.ios ||
            this.browser.versions.android ||
            this.browser.versions.iPhone ||
            this.browser.versions.iPad
        ) {
            //wap
            return this.wapContent;
        } else {
            //web
            return this.content;
        }
    }

    fire(id) {
        let rootElement = document.getElementById(id);
        this.zhHtml();
        rootElement.innerHTML = this._renderHtml();

        let oFoot = document.getElementById("fco-wap-footerwrap");
        if (oFoot) {
            let oA = oFoot.getElementsByTagName("a");
            for (let i = 0; i < oA.length; i++) {
                oA[i].addEventListener("touchstart", function() {
                    this.className = "active";
                });
                oA[i].addEventListener("touchend", function() {
                    for (let i = 0; i < oA.length; i++) {
                        oA[i].className = "";
                    }
                });
            }
        }
        let oFcoPcfooterWidth = document.getElementById("fco-footer-foot");
        if (oFcoPcfooterWidth) {
            if (window.navigator.userAgent.indexOf("MSIE 7.0") !== -1) {
                let footBox = document.getElementById("fco-footer-footBox");
                footBox.style.display = "inline";
                let offWidth = oFcoPcfooterWidth.offsetWidth;
                footBox.style.display = "block";
                footBox.style.width = offWidth + 10 + "px";
            }
        }
    }

    zhHtml() {
        if (this.lang === "zh") {
            this.fLogo = "//img.oasgames.com/upload/1505731532.png";
            this.logoMarginT = "7px";
            this.oasgame = "oasgames.com/pc/zh";
        } else {
            this.footerBottomLang = "en";
        }
        if (this.lang === "tw") {
            this.oasgame = "oasgames.com/pc/zh";
        }
    }

    forum() {
        if (this.forumBok) {
            this.forumContent = `<span> | <a target="_blank" href="${
                this.forumHref
            }">${this.langContent.footer_forum}</a></span>`;
        } else {
            this.forumContent = "";
        }
        if (this.billBok) {
            this.billContent = `<span> | <a target="_blank" href="${
                this.billHref
            }">${this.langContent.footer_bill}</a></span>`;
        } else {
            this.billContent = "";
        }
        if (this.cookiesPolicyBok) {
            this.cookiesPolicyContent = `<span> | <a target="_blank" href="${
                this.cookiesPolicyHref
            }">${this.langContent.footer_cookies_policy}</a></span>`;
        } else {
            this.cookiesPolicyContent = "";
        }
    }
}

export default Footer;
