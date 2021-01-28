// IIFE ==> An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

//*******SYNTAX*******
        // (function () {
        //     statements
        // })();

// Self-Executing Anonymous Function 
// it contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
//    This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// NORMAL FUNCTION
function sayHello(){
    console.log("Normal function");
}
sayHello();

// Self-Executing Anonymous Function 
(function (){
    console.log("This is Self-Executing Anonymous Function ");
})();
