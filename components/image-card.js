import { changeAttribute, changeText } from "/assets/js/main.js";

class ImageCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="image-card card mb-3">
                <div class="row g-0">
                    <div class="col-4 col-sm-2 col-xl-1 d-flex align-items-center p-2">
                        <img src="/assets/logo-placeholder.png" class="logo img-fluid rounded-start" alt="university-logo">
                    </div>
                    <div class="col d-flex align-items-center">
                        <div class="card-body">
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