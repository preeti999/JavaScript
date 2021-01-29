var userInfo = {
    firstName: "Preeti",
    lastName: "kumari",
    role: "admin",
    courseCount: 4,
    getInfo: function () {
        console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            Role is :${this.role}
            and user is studing ${this.courseCount} cources
        `);
    },

}

var newUser = {
    firstName: "Shivam",
    lastName: "sharma",
    role: "admin",
    courseCount: 2,
}

// userInfo.getInfo();

// userInfo.getInfo.bind(newUser)();

// bind ==> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// bind always gives the refrence back and you have to manually call the refrence
var result = userInfo.getInfo.bind(newUser);
result();

// call ==> directly call the refrence
userInfo.getInfo.call(newUser);

