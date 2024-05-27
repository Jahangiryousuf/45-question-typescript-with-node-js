var currentUser = ["ali", "hamza", "akram", "kashif", "atif"];
var newUser = ["asif", "javed", "Ali", "hamza"];
// loop through newuser to check username available
newUser.forEach(function (new1user) {
    var ourcondition = currentUser.some(function (current1user) { return current1user.toLowerCase() === new1user.toLowerCase(); });
    if (ourcondition) {
        console.log("\"sorry\" ".concat(new1user, "\" is already taken\""));
    }
    else {
        console.log("\"this user name\" ".concat(new1user, "\" is available\""));
    }
});
