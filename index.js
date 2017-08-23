'use strict';

import Footer from './components/Footer.vue';

class Fco {
    constructor(Vue) {
        this.vue = Vue;
    }

    register(componentName) {
        switch (componentName) {
            case 'fco_footer':
                break;
        }

        return this;
    }

    fire(id) {
        new this.vue({
                el: id,
            }
        );
    }
}

const fco = (Vue) => {
    return new Fco(Vue);
};
export default fco;
