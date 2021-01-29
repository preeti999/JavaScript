// calling a class

// import User from "./6.classjs.js"

const User = require("./6.classjs.js");

const preeti = new User("preeti", "preetik.ce1998@gmail.com");

// console.log(preeti);
console.log(preeti.getInfo());

preeti.enrollCoursce("HTML");
preeti.enrollCoursce("css");
console.log(preeti.getCourceList());

let cource = preeti.getCourceList();
cource.forEach((c) => (console.log(c)));

// console.log(preeti.getCourceList());
