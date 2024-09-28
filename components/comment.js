import { changeText, changeAttribute } from "/assets/js/main.js";

class Comment extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="comment list-group-item rounded">
                <div class="d-flex w-100 column-gap-2 align-items-center">
                    <img src="/assets/logo-placeholder.png" alt="User" class="avatar rounded-circle" style="width: 60px; height: 60px;">
                    <div class="w-100 d-flex flex-column justify-content-center column-gap-2 align-items-stretch">
                        <div class="d-flex justify-content-between">
                            <span class="user"><strong>@usuario</strong></span>
                            <small class="date">Mes dia, año</small>
                        </div>
                        <p class="text m-0">Contenido del comentario.</p>
                    </div>
                </div>
            </div>
        `
    }

    static get observedAttributes() {
        return ["user", "img", "date", "content"]
    }

    attributeChangeCallback(name, old_value, new_value) {
        switch (name) {
            case "user":
                changeText(this, ".comment .avatar", new_value);
                break;
            case "img":
                changeAttribute(this, ".comment .avatar", "src", new_value)
                break;
            case "date":
                changeText(this, ".comment .date", new_value)
                break;
            case "content":
                changeText(this, ".comment .text", new_value)
                break;
        }
    }
}

customElements.define("comment-component", Comment);