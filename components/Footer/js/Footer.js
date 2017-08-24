import '../css/footer.css';
import langPackage from '../js/lang'

export default class Footer {
    constructor(data) {
        this.lang = data.lang || 'en';
        this.data = data;
    }

    _renderHtml(data) {
        let lang = langPackage[this.lang];
        return `<div class="foc_footer" style="background-color: ${data.background_color}">Welcom to use ${data.content} ${lang.test}</div>`;
    }


    fire(id) {
        let rootElement = document.getElementById(id);
        rootElement.innerHTML = this._renderHtml(this.data);
    }
}
