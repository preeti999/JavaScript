// A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

// A Promise is in one of these states:
//    1. pending: initial state, neither fulfilled nor rejected.
//    2. fulfilled: meaning that the operation was completed successfully.
//    3. rejected: meaning that the operation failed.


const one = () => {
    return "I am ONE";
}

/*
const two = () => {
    // const two = async() => {
    // it will create a problem
    setTimeout(() => {
        return "I am TWO";
    }, 3000);
}
*/

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am TWO");
        }, 3000);
    })


}

const three = () => {
    return "I am THREE";
}

const callMe = async () => {
    let valOne = one();
    console.log(valOne);

    let valTwo = await two();
    console.log(valTwo);

    let valThree = three();
    console.log(valThree);
}

callMe();