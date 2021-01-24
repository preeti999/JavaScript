// CONTEXT
// ==> Variable object
// ==> Scope chain
// ==> this

// **function declaration are scanned and made available
// **variable decleration are scanned and made undefined 

// global context
// execuation context


sayhello();
function sayhello() {
    console.log("function is called before it build");
}

if (2 === 2) {
    // ""==="" is used to check the type as well as the value
    console.log("this is true");
}

//global context is available to us in the browser 
// but in node context is available, but have differnt name

/*
var myName = "preeti";
if(myNAme === window.myNAme){
    console.log("this is a true statment");
}

*/



// global context
// execuation context

tipper(9);
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


/*

// when we call variable funtion then it will not work
// ==> calling a variable function
bigTipper(90);
var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 50);
}

*/

// ********concept of global variable***********

console.log(myName);       // ==> undefined
var myName = "preeti";

function sayName() {
    var name = "preeti is this side";
    console.log(name);
}
sayName();                  // call function and print "preeti is this side"

console.log(myName);        // print "preeti"