// A function serves as a closure in JavaScript, and thus creates a scope, 
// so that a variable defined exclusively within the function cannot be accessed from outside the function or within other functions
// Scope is only defind in functions

// The let statement declares a block-scoped local variable, optionally initializing it to a value.


console.log(name);      // give result as undefind ==> which is not trackable if there is huge code
var name = "preeti";

// console.log(lastName);     // show error which is trackable 
let lastName = "kumari";

if (true) {
    var anotherName = "Second";
}
console.log(anotherName);       // show output as second which is not a good practice ==> it should show error


// USE LET insted of var 

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
*/

// as you can see in for loop the decleration of variable is done by let, if if another for loop is created then it will not generate any problem.



