const one = () => {
    console.log("I am ONE");
}

const two = () => {
    // it will create a problem
    setTimeout(() => {
        console.log("please wait i am busy");
    }, 3000);
    console.log("I am TWO");
}

const three = () => {
    console.log("I am FOUR");
}

const five = () => {
    console.log("I am FIVE");
}

one();
two();
three();
five();
