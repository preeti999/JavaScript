// Create a application with following role
// admin -> get full access of the cource
// subadmin -> gets access to create/delete cource
// testPrep -> gets access to create/delete tests
// user -> gets access to consume content


var user = "admin";

switch (user) {
    case "admin":
        console.log("get full access of the cource");
        break;
    case "subadmin":
        console.log("gets access to create/delete cource");
        break;
    case "testPrep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    
    default:
        console.log("Trial user");
        break;
}
