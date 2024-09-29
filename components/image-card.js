import { changeAttribute, changeText } from "/assets/js/utils.js";

class ImageCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <button type="button" class="image-card btn btn-dark card mb-3 w-100">
                <div class="row g-0 w-100">
                    <div class="col-4 col-sm-2 col-xl-1 d-flex align-items-center p-2">
                        <img src="/assets/logo-placeholder.png" class="logo img-fluid rounded-start" alt="university-logo">
                    </div>
                    <div class="col d-flex align-items-center">
                        <div class="card-body">
                            <h5 class="card-title text-start">Titulo</h5>
                            <p class="card-text text-start"></p>
                        </div>
                    </div>
                </div>
            </button>
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