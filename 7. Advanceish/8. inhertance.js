
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

    //private property ==> cannot inheritaed 
    static login() {
        return "I am User";
    }

}

class subAdmin extends User {
    constructor(name, email) {
        // The super keyword is used to access and call functions on an object's parent.
        super(name, email);
    }

    getAdminInfo() {
        return "i am sub admin";
    }

    login() {
        return "you are subadmin";
    }
}

const tommy = new subAdmin("tom", "tom@jarry.com");
// const tommy = new subAdmin();
console.log(tommy.getAdminInfo());
console.log(tommy.login());
console.log(tommy.getInfo());
