// finding odd and even

// *********************FIRST WAY

console.log("==>One way");
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(2));

// *********************SECOND WAY********************************
console.log("==>Second way");
var isEvenOdd = function (num) {
    return num % 2 === 0;
}
console.log(isEvenOdd(3));


// **********************THIRD WAY********************************
console.log("==>Third way");
var arrowFunction = function (num) {
    return num % 2 === 0;
}
console.log(arrowFunction(5));


// ************************FOURTH WAY********************************
console.log("==>fourth way");
var result = [2, 3, 6, 8].every(arrowFunction);
// return true : if all value which is presented in the array are even
// return false : if any of value is odd
console.log(result);


// *************************FIFTH WAY********************************
console.log("==>Fifth way");
// var result2=[2,4,6,8].every( () => {} )
var result2 = [2, 3, 6, 8].every((e) => {
    return e % 2 === 0;
});
console.log(result2);

// var result2=[2,4,6,8].every( () => () )
var result3 = [2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result3);