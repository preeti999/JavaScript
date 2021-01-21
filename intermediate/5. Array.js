// Array :  Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
//          array's length can change at any time, and data can be stored at non-contiguous locations in the array.
//          

var countries = ["India", "USA", "japan", "Russia"];
var state = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//print first element of the array
console.log("==>print first element of the array");
console.log(state[1]);
console.log(state.length);

//print last element of the array
console.log("==>print last element of the array");
var lastElement = state[state.length - 1];
console.log(lastElement);

state[0] = "punjab";
console.log(state);

console.log("==>For loop");
state.forEach(function (item, index, array) {
    console.log(item, index);
})
// console.log("***********************");

// Add an item to the end of an Array
console.log("==>Add an item to the end of an Array");
state.push("Bihar")
console.log(state);
// console.log("***********************");

// Remove an item by index position
console.log("==>Remove an item by index position");
// console.log("line 31");
var index = state.indexOf("Bihar")
var removeState = state.splice(index);
console.log(state);
// console.log("***********************");


// this is not a good idea to write, use OBJECT to store these type of data
var userInfo = ["preeti", "preetik.ce1998@gmail.com", 22, true]
console.log(userInfo);

// Remove last element
console.log("==>Removed last element");
userInfo.pop();
console.log(userInfo);

// Add an item to the beginning of an Array
console.log("==>Add an item to the beginning of an Array");
userInfo.unshift("addaed new value");
console.log(userInfo);

// Remove an item from the beginning of an Array
console.log("==>Remove an item from the beginning of an Array");
userInfo.shift();
console.log(userInfo);

// Find the index of an item in the Array
console.log("==>Find the index of an item in the Array");
console.log(userInfo.indexOf("preeti"));

//convert string into a array
console.log("==>convert string into a array");
console.log(Array.from("PREETI"));


// Remove items from an index position
console.log("==>Remove items from an index position");
var car = ["BMW", "Audi", "Toyota", "Honda", "Kia"]
console.log(car);
var pos = 1;
var n = 2;
var removedItems = car.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(car);
console.log(removedItems);

// Copy an array
console.log("==>Copied array");
var copyArray = car.slice();
console.log(copyArray);