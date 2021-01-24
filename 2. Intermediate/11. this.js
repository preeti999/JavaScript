// For all regular function calls, this points to a window Object
console.log(this);

var user ={
    firstName:"Preeti",
    lastNAme:"Kumari",
    courseCount:5,
    getCourceCount: function(){
        console.log("LINE 9", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 12",this);
        }
        sayHello();
    },
};
user.getCourceCount();

// FOR MORE UNDERSTANDING RUN THIS CODE IN BROWSER CONSOLE
