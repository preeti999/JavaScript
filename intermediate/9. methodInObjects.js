var user = {
    firstName: "Preeti",
    lastName: "Kumari",
    role: "Student",
    facebookSignedIn: true,
    courseList:[],

    buyCource : function(courseName){
        this.courseList.push(courseName);
    },
    getCourceCount: function(){
        return `${this.firstName} is enrolled in total number of ${this.courseList.length} courses, that is ${this.courseList}`
    },
    info : function(){
        console.log(this.firstName,this.lastName, this.role, this.courseList);
    } 
}

// user.buyCource("C++");
console.log(user.getCourceCount());
user.buyCource("Java");
console.log(user.getCourceCount());

// user.info()
