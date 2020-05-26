<template>
    <div v-if="!isMobile" class="fcs-footer-footwrap">
        <div class="fcs-footer-footBox">
            <div class="fcs-footer-foot">
                <div class="fcs-footer-logo">
                    <a
                        :href="
                            '//oasgames.com/pc/' +
                                lang.footer_lowercase +
                                '/company.html'
                        "
                    >
                        <img
                            alt="footer-logo"
                            src="../assets/images/footer/foot_logo.png"
                            style="margin-top: 0; border:none;"
                        />
                    </a>
                </div>
                <div class="fcs-footer-bottext">
                    <div>
                        <a
                            target="_blank"
                            :href="
                                'https://oasgames.com/pc/' +
                                    lang +
                                    '/company.html'
                            "
                            rel="nofollow"
                        >
                            {{ lang.footer_abus }}
                        </a>
                        |
                        <a
                            target="_blank"
                            :href="
                                privacyHref +
                                    'PrivacyPolicy' +
                                    lang.footer_capital +
                                    '.html'
                            "
                        >
                            {{ lang.footer_pri }}
                        </a>
                        |
                        <a
                            target="_blank"
                            :href="
                                privacyHref +
                                    'TermsofService' +
                                    lang.footer_capital +
                                    '.html'
                            "
                        >
                            {{ lang.footer_term_ser }}
                        </a>
                        |
                        <a
                            target="_blank"
                            :href="
                                privacyHref +
                                    'privacy_control/PrivacyControl' +
                                    lang.footer_capital +
                                    '.html'
                            "
                        >
                            {{ lang.footer_privacy }}
                        </a>
                        <template v-if="this.options.gamecode !== undefined">
                            |
                            <a
                                target="_blank"
                                :href="
                                    'https://profile.tapdrop.games/' +
                                        'static-page/' +
                                        this.options.gamecode +
                                        '/auto-subscription-agreement-' +
                                        lang.footer_lowercase +
                                        '.html'
                                "
                            >
                                {{ lang.footer_charge }}
                            </a>
                        </template>
                    </div>
                    <p>©{{ footerHis }}</p>
                    <p>{{ lang.footer_notice }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="fcs-wap-footerwrap">
        <div class="fcs-wap-footerwrap-con">
            <img src="../assets/images/footer/foot_logo_zh.png" alt="" />
            <div class="fcs-wap-footerwap-href">
                <a
                    target="_blank"
                    :href="
                        '//oasgames.com/pc/' +
                            lang.footer_lowercase +
                            '/company.html'
                    "
                    rel="nofollow"
                >
                    {{ lang.footer_abus }}
                </a>
                |
                <a
                    target="_blank"
                    :href="
                        privacyHref +
                            'PrivacyPolicy' +
                            lang.footer_capital +
                            '.html'
                    "
                >
                    {{ lang.footer_pri }}
                </a>
                |
                <a
                    target="_blank"
                    :href="
                        privacyHref +
                            'TermsofService' +
                            lang.footer_capital +
                            '.html'
                    "
                >
                    {{ lang.footer_term_ser }}
                </a>
                |
                <a
                    target="_blank"
                    :href="
                        privacyHref +
                            'privacy_control/PrivacyControl' +
                            lang.footer_capital +
                            '.html'
                    "
                >
                    {{ lang.footer_privacy }}
                </a>
                <template v-if="this.options.gamecode !== undefined">
                    |
                    <a
                        target="_blank"
                        :href="
                            'https://profile.tapdrop.games/' +
                                'static-page/' +
                                this.options.gamecode +
                                '/auto-subscription-agreement-' +
                                lang.footer_lowercase +
                                '.html'
                        "
                    >
                        {{ lang.footer_charge }}
                    </a>
                </template>
            </div>
            <p>©{{ footerHis }}</p>
            <p>{{ lang.footer_notice }}</p>
        </div>
    </div>
</template>

<script>
import langPackage from "../lang/footer";
import isMobile from "ismobilejs";

export default {
    props: {
        options: Object
    },
    name: "Footer",
    data() {
        return {
            privacyHref: "//www.oasgames.com/",
            isMobile: isMobile.any
        };
    },
    computed: {
        lang: function() {
            return langPackage[this.options.lang] === undefined
                ? langPackage["en"]
                : langPackage[this.lang];
            // console.log(this.options)
        },
        // gamecode:()=>{
        //     if(this.options.gamecode===undefined){
        //
        //     }
        // },
        footerHis: function() {
            let date = new Date();
            return date.getFullYear() + " " + this.lang.footer_his;
        }
    },
    created() {
        // getCescharge(){
        //     return request({
        //         type: "jsonp",
        //         url: constants.urls.GET_LIST_FROM_CES,
        //         data: {
        //             type: -1,
        //             parent_id: "mpken"
        //         }
        //     }).then(res => {
        //         return res.result;
        //     });
        // }
    }
};
</script>

<style scoped lang="scss">
.fcs-footer-clearfix:after {
    content: " ";
    display: block;
    clear: both;
    height: 0;
}

.fcs-footer-clearfix {
    zoom: 1;
    display: table;
}

.fcs-footer-fl {
    float: left;
}

.fcs-footer-fr {
    float: right;
}

/*footer*/
.fcs-footer-footwrap {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    margin: 0 auto;
    background: #000;

    .fcs-footer-footBox {
        margin: 0 auto;
        height: auto;
        @extend .fcs-footer-clearfix;

        .fcs-footer-foot {
            font-size: 13px;
            height: 87px;
            line-height: 16px;
            width: auto;
            min-width: 608px;
            padding-top: 13px;
            overflow: hidden;
            color: #979797;
            @extend .fcs-footer-clearfix;

            .fcs-footer-logo {
                padding-top: 0px;
                line-height: 68px;
                text-align: center;
                margin-left: 10px;
                @extend .fcs-footer-fl;
                img {
                    width: 98px;
                    display: block;
                }
            }
            .fcs-footer-bottext {
                display: inline;
                font-size: 13px;
                height: 55px;
                line-height: 20px;
                margin-top: 6px;
                padding-left: 20px;
                @extend .fcs-footer-fl;

                a:visited,
                a:link {
                    font-size: 13px;
                    text-decoration: none;
                    color: #979797;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    a {
        cursor: pointer;
        background-color: transparent;
    }
}

/*wap footer*/
.fcs-wap-footerwrap {
    font-family: sans-serif;
    width: 100%;
    margin: 0 auto;
    background: #000;
    color: #b8b6b4;
    zoom: 1;

    .fcs-wap-footerwrap-con {
        padding: 0 3vw 5vw;
        text-align: center;
        font-size: 3.4vw;

        img {
            margin: 0 auto;
            display: block;
            padding: 4vw 0;
            width: 28vw;
        }

        .fcs-wap-footerwap-href {
            line-height: 7vw;

            a {
                color: #b8b6b4;
                text-decoration: none;
                font-size: 3.8vw;
                line-height: 4.2vw;
            }

            a.active {
                text-decoration: underline;
            }
        }

        p {
            margin-top: 1.5vw;
        }
    }
}
</style>
