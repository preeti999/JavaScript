// Classes are a template for creating objects.They encapsulate data with code to work on that data.

// Classes are in fact "special functions", and just as you can define function expressions and function declarations, 
// the class syntax has two components: class expressions and class declarations.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCoursce(name) {
        this.courseList.push(name);
    }

    getCourceList() {
        return this.courseList;
    }
}

module.exports = User;