// Spread syntax(...) allows an iterable such as an array expression or string to be expanded in places where 
// zero or more arguments(for function calls) or elements(for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key - value pairs(for object literals) are expected.

// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 


//************************************************************** */

// var returnedValue = Math.max(2,13,5,8);
// console.log(returnedValue);

/*
var myObj = {};
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { d: 4, e: 5, h: 6 }, { i: 7, j: 8, k: 9 });
console.log(myObj);
*/

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA));    // spread operator => take an array and behave like an idividual element

function sumTwo(a, b, ...args) {
    console.log("passed arguments: ", args);

    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return ["sum of a & b: " + sum, "Multiplication of a & b: " + multi];
}
console.log(sumTwo(2, 3, 1, 1, 1));
