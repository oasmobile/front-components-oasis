import Vue from "vue";
import Fco from "./index";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Fco);

new Vue({
    render: h => h(App)
}).$mount("#app");
