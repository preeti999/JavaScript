// Fill
// filter

// fill the array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number.fill("empty"));
console.log(number.fill("empty", 2, 5));


const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = number.filter((number2) => number2 < 5);
console.log(result);