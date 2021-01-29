var arr = ["Preeti", "Kumari", "IT", 4];

// Normal way to access an array
var fullName = arr[0] + " " + arr[1];
var branch = arr[2];
var year = arr[3];

console.log("name: " + fullName);
console.log("branch: " + branch);
console.log("year: " + year);

// Destructure the array then use it
var [firstName, lastName, branch, year] = arr;
console.log(firstName);


// ********* OBJECTS **********
console.log("Object example");
const user = {
    name: "preeti",
    courseCount: 5,
    role: "admin",
}
console.log(user.name);

// By using destructure
// object name must be same otherwise it will show undefined error
const { name, courseCount, role } = user;
console.log(courseCount);


