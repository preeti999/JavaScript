/*
Define a function that can be ans the role of the user
A user can be in following role :
admin - with all access
subadmin - with access to create and delete cource
testprep - with access to create and delete test
user - consume all content 
other - trial user

Input : getUserRole(name, role)
*/

// function getUserRole(name, role) {
    
var getUserRole = function(name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all the access`
            // break; 
            // break is not necessary
        case "subadmin":
            return `${name} is sub-admin with access to create and delete the cource`
            // break;
        case "testPrep":
            return `${name} is test prep with access to create a test`
            // break;
        case "user":
            return `${name} is user to consume the content`
            // break;
        default:
            return `${name} is a trial user`
            // break;
    }
}

console.log(getUserRole("preeti","admin"));

var getRole = getUserRole("preeti kumari", "user");
console.log(getRole);
