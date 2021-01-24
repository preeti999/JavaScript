var counter = document.querySelector(".counter");
var follower = document.querySelector(".follwers");

let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;

        if (count === 1000) {
            follower.innerText = "Thankyou for your love!";
        }
    }
}, 1);

// setInterval(() => {
//     follower.innerText = "Thankyou for your love!";
// }, 4000)