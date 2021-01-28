// init() creates a local variable called name and a function called displayName(). 
function init() {
    var firstName = "preeti";         // name is a local variable created by init
    function displayFirstName() {
        console.log(firstName);     // use variable declared in the parent function
    }
    displayFirstName();
}
init();

