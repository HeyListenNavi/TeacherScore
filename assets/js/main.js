export function changeAttribute(parent, selector, attribute, value) {
    const element = parent.querySelector(selector);
    element.setAttribute(attribute, value);
}

export function changeText(parent, selector, text) {
    const element = parent.querySelector(selector);
    element.innerText = text;
}
