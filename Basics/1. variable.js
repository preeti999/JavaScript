/********************VAR********************************/
var x = "hello world";

function hello() {
    var x  = "hey there"; // redeclared
    x = "hola!"; // reassigned
    console.log(x); // OUTPUT: hola!
}
console.log(x); // OUTPUT: hello world
hello();

// var is scoped to 'current execution context',i.e. it is scoped to the function enclosing the variable or the global scope.



/********************LET********************************/
let colour = "red"; 

function hello() {
    let colour = "blue"; //different variable
    colour = "pink"; // can reassign
    let colour = "orange"; // can't redeclare
    console.log(colour);
}
console.log(colour); // OUTPUT: red
hello();

// let is block scoped. NOT context scope. This means that a variable declared with let is only valid within { }.



/********************CONST********************************/
const x = 5;
x = 10; // error: Uncaught TypeError: Assignment to constant variable.

const y = ["a", "b", "c"];
y.push("d"); // array can be manipulated
console.log(y); // OUTPUT: ["a", "b", "c", "d"]

//Const stands for constant. Like let, const is also scoped to a block. Like let, const can't be redeclared within the same block scope.
//The idea is that the reference of the const variable can't change. 
// This doesn't mean that the variable is immutable. It just means the memory reference can't change.
