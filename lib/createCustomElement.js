import {components} from "./settings.js";


function defineCustomElements() {
    for (const componentsKey in components) {
        defineCustomElement(componentsKey)
    }
}

async function defineCustomElement(filename) {
    const elementName = filename
    customElements.define(`mk-${elementName}`,
        components[elementName]
    );
}


defineCustomElements()