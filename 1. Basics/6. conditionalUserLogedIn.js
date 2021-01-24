// User is only allowed to make a purchase when he is loged in through:
// email varified
// facebook
// google

var email = true;
var fb = true;
var google = true;
if (email || fb || google) {
    console.log("user is allowed to purchase the cource");
} else {
    console.log("you should log in first");
}