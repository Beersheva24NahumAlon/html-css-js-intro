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
    const starsNumbers = calculateStarsCounts(ratePercent, starsNumber)
    const res = getRatingHTML(starsNumbers);
    return res;
}

function getRatingHTML({fullStars, halfStars, emptyStars}) {
    const fullStarHTML = "<i class='fa-solid fa-star'></i>";
    const halfStarHTML = "<i class='fa fa-star-half-o'></i>";
    const emptyStarHTML = "<i class='fa-regular fa-star'></i>";
    const res = fullStarHTML.repeat(fullStars) + halfStarHTML.repeat(halfStars) + emptyStarHTML.repeat(emptyStars);
    return res;
}

function calculateStarsCounts(ratePercent, starsNumber) {
    const rate = ratePercent / 100;
    const starsRating = starsNumber * rate;
    let fullStars = Math.floor(starsRating);
    const fractionalPart = starsRating - fullStars;
    let halfStars = 0;
    if (fractionalPart > 0.25 && fractionalPart <= 0.75) {
        halfStars = 1;
    }
    if (fractionalPart > 0.75) {
        fullStars++;
    }
    const emptyStars = starsNumber - fullStars - halfStars;
    return {fullStars, halfStars, emptyStars};
}
