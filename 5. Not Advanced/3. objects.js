// Declearing a object through various manner

var User = {
    name: "",
    getUserNAme: function () {
        console.log(`USer name is : ${this.name}`);
    },
}

var preeti = Object.create(User);
console.log(preeti);

preeti.name = "Preeti kumari";  // gives you the full user name
preeti.getUserNAme();

// caling a prototype without constuctor
var shivam = Object.create(User, {
    name: { value: "Shivam kumar" },
    courseCount: { value: 5 }
});
shivam.getUserNAme();
