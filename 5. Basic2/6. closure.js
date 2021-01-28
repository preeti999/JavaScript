// this code has exactly the same effect as the previous example of the init() function above.
//  What's different (and interesting) is that the displayFirstName() inner function is returned from the outer function before being executed.


/*

function init() {
    console.log("This is init function");
    var firstName = "preeti";         // name is a local variable created by init
    function displayFirstName() {
        console.log(firstName);     // use variable declared in the parent function
    }
    return displayFirstName;
}
var callFunction = init();
callFunction();

*/

// ********* ADITION OF NUMBER *********
function addTwoNumber(x) {
    return function (y) {
        return x + y;
    }
}
var result = addTwoNumber(5);
console.log("Result is: ", result(4));

console.log(addTwoNumber(5)(5));    // this is possible bcz of closure and memory in javascript ==> also used in redux


