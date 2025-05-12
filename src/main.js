import RateComponent from "./components/RateComponent.js";

const rateParent = document.querySelector(".rate");
const rateComponent = new RateComponent(10);

rateComponent.render(rateParent, 55);