export default class RateComponent {
    #starsNumber

    constructor(starsNumber = 5) {
        this.#starsNumber = starsNumber;
    }

    render(parent, rate) {
        parent.innerHTML = getRate(rate, this.#starsNumber);
    }
}

function getRate(ratePercent, starsNumber) {
    const rate = ratePercent / 100;
    const fullStars = starsNumber / rate;
    const fractionalPart = starsNumber % rate;
    const halfStar = 0;
    if (fractionalPart > 0.25 && fractionalPart < 0.75) {
        halfStar = 1;
    }
    if (fractionalPart > 0.75) {
        fullStars++;
    }
    const res = `${fullStars} - ${halfStar}`;
    return res; 
}