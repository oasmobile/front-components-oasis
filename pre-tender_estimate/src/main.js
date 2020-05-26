import Vue from "vue";
import Fcs from "./index";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Fcs);

new Vue({
    render: h => h(App)
}).$mount("#app");
