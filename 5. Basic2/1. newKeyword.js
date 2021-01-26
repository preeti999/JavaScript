// When creating any prototype start with upper case
var User = function(firstName, courceCount){
    this.firstName=firstName;
    this.courceCount=courceCount;

    this.getCourceCount=function(){
        console.log(`Cource count is: ${this.courceCount}`);
    }
}



// new keyword is responsible for invoking the new constructor, and creating a new instance every single time
// new copy of entire object is created when new is object is called.

var newUser = new User("preeti",1);
console.log(newUser);