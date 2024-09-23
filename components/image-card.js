import { changeAttribute, changeText } from "/assets/js/main.js";

class ImageCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="image-card card mb-3 w-100">
                <div class="row g-0">
                    <div class="col-sm-2  p-2 d-flex align-items-center justify-content-center">
                        <img src="/assets/logo-placeholder.png" class="logo img-fluid rounded-start" alt="university-logo">
                    </div>
                    <div class="col-sm">
                        <div class="card-body d-flex flex-column justify-content-center flex-wrap h-100">
                            <h5 class="card-title">Titulo</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static get observedAttributes() {
        return ["img", "title", "text"];
    }

    attributeChangedCallback(name, old_value, new_value) {
        switch(name) {
            case "img":
                changeAttribute(this, ".logo", "src", new_value);
                break;
            case "title":
                changeText(this, ".card-body .card-title", new_value);
                break;
            case "text":
                changeText(this,".card-body .card-text", new_value);
                break;
        }
    }
}

customElements.define('image-card', ImageCard);