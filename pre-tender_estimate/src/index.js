import Footer from "./components/Footer.vue";
// import LoginReg from "./components/LoginReg.vue";

const Fcs = {
    install: function(Vue) {
        Vue.component("fcs-footer", Footer);
        // Vue.component("fcs-login-reg", LoginReg);
    }
};

export default Fcs;
