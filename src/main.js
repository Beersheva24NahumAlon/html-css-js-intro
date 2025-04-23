const LONG_INTERVAL = 3000;
const SHORT_INTERVAL = 1000

const states = [
    {colors: { red: "on", yellow: "off", green: "off" }, interval: LONG_INTERVAL},
    {colors: { red: "on", yellow: "on", green: "off" }, interval: SHORT_INTERVAL},
    {colors: { red: "off", yellow: "off", green: "on" }, interval: LONG_INTERVAL},
    {colors: { red: "off", yellow: "on", green: "off" }, interval: SHORT_INTERVAL},
];

function changeStage() {
    const state = states[stage].colors;
    for (let key in state) {
        const element = document.getElementById(key);
        element.classList.remove(`traffic-light--${key}`);
        if (state[key] === "on") {
            element.classList.add(`traffic-light--${key}`);
        }
    }
}

function increaseStage() {
    stage++;
    if (stage > states.length - 1) {
        stage = 0;
    }
}

let stage = 0;
function repeat() {
    changeStage();
    const interval = states[stage].interval;
    increaseStage();
    setTimeout(repeat, interval);
}

repeat();







