import {TestElement} from "../components/Test/TestElement.js";
import {MyComponentElement} from "../components/MyComponent/MyComponentElement.js";
import {CardElement} from "../components/Card/CardElement.js";
import {SlideTextElement} from "../components/SlideText/SlideTextElement.js";

const components = {
    "test": TestElement,
    "mycomponent": MyComponentElement,
    "card": CardElement,
    "slide-text": SlideTextElement,
}

const componentFolder = "/components"

export {components, componentFolder}
