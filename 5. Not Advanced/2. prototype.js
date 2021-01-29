
// When creating any prototype start with upper case
var User = function (firstName, courceCount) {
    this.firstName = firstName;
    this.courceCount = courceCount;

    this.getCourceCount = function () {
        console.log(`Cource count is: ${this.courceCount}`);
    }
}


// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. 
// This is often referred to as a prototype chain, 
// and explains why different objects have properties and methods defined on other objects available to them.
User.prototype.getFirstName = function () {
    console.log(`User name is : ${this.firstName}`);
}

var preeti = new User("preeti", 1);
// preeti.getFirstName();   // ==> if firstName is not mention then it will give output as "undefined"

//another way of calling first name ==> this is excellent practice
if(preeti.hasOwnProperty("firstName")){
    preeti.getFirstName();
}

preeti.getCourceCount();
// console.log(preeti);


var sam = new User("Sam", 2)
sam.getFirstName();
sam.getCourceCount();
