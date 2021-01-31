// Finding a joke from chucknorris

// https://api.chucknorris.io/jokes/random
// this code only working in chrome=>console

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        var joke = data.value;
        console.log("JOKE: ", joke);
    })
    .catch();