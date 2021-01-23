// Fill, filter, Slice, Splice
// whenever you are passing a range, the first value is always inclusive(n) and last value is always exclusive(n-1)

// Fill & Filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number.fill("empty"));
console.log("****Fill example****");
console.log(number.fill("empty", 2, 5));

console.log("****Filter example****");
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = number.filter((number2) => number2 < 5);
console.log(result);

// SLICE & SPLICE
console.log("****Slice exmaple****");
var student = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(student.slice(2, 6));        // start with "n" and goes to "(n-1)""
console.log(student.slice(2));          // cut the all the value before "n"
console.log(student.slice(student.length - 1));   // print last value

console.log("****Splice example****");
var student2 = ["A", "B", "C", "D", "E", "F", "G", "H"];
student2.splice(1, 5, "splice", "here");  // "starting index", "count of index that we want to delete", "element/string that we want place" 
console.log(student2);
