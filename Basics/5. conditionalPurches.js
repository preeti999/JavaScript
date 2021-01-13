// User is only allowed to make a purchase when he is :
// Logged in
// email varified
// cardInfo - valid
// if any one is missing, stop purches

var isLoggedIn = true;
var isEmailVarified = true;
var cardInfo = true;

if(isLoggedIn){
    console.log("user successfully loged in");
    if(isEmailVarified){
        console.log("Email successfully varified");
        if(cardInfo){
            console.log("user is allowed to purchase the cource");
        }
    }
}


//           WITH AND OPERATOR
// && -> if all the condition is true
// || -> only one condition is true
if(isLoggedIn && isEmailVarified && cardInfo){
    console.log("\nuser is allowed to purchase the cource");
}else{
    console.log("user is NOT allowed to purches the cource");
}
