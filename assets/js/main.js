const elements = {
    _stars: null,
    _rating: null,
    get stars() {
        if (this._stars === null) {
            this._stars = document.querySelectorAll(".stars i");
        }
        return this._stars;
    },
    get rating() {
        if (this._rating == null) {
            this._rating = document.querySelector(".stars input");
        }
        return this._rating;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    elements.rating.addEventListener("input", () => {
        rateStars(elements.rating.valueAsNumber, elements.stars); 
    });
});  

function rateStars(rating, stars) {
    stars.forEach(star => {
        star.style.color = "#b2b2b2";
        
        if (rating > 0) {
            star.style.color = "#eb9f1c";
        }
        
        rating--;
    });
}