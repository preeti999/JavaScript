const cards = document.querySelectorAll(".card");
// console.log(cards);

// variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));


function flip() {
    // console.log("card flipped");
    // console.log(this);                   //==> used to track all the cards

    this.classList.add("flip");             // flip is mentioned in CSS
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this
    }
    else {
        secondCard = this;
        checkCards();
        console.log(firstCard);
        console.log(secondCard);
    }
}

function checkCards() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }

}

function success() {
    firstCard.removeEventListener("click", flip)
    secondCard.removeEventListener("click", flip)
    reset();

}

function fail() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 500)

}
function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;

}

(function shuffle() {
    cards.forEach((card) => {
        const index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
})();

