var myName = "preeti";

console.log("at line number 3", myName);

function sayName() {
    // var myName = "PK";
    console.log("at line nu,ber 7", myName);

    sayNameSecondTime();
    function sayNameSecondTime() {
        // var myName = "no need";
        console.log("at line number 12",myName);
    }
}
sayName();

