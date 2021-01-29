// Classes are a template for creating objects.They encapsulate data with code to work on that data.

// Classes are in fact "special functions", and just as you can define function expressions and function declarations, 
// the class syntax has two components: class expressions and class declarations.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // Private variable => just put "#"
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }

    // work as setter
    enrollCoursce(name) {
        this.#courseList.push(name);
    }

    // work as getter
    getCourceList() {
        return this.#courseList;
    }
}

module.exports = User;

const tommy = new User("tommy", "tommy@gmail.com")
console.log(tommy.getInfo());
tommy.enrollCoursce("C++");
console.log(tommy.getCourceList());

// Because the function is private that's why line no 36 shows "undefined"
console.log(tommy.getCourceList);

