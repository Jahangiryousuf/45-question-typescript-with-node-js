var userName = ["akram", , "admin", "khalid", "ali", "zeeshan"];
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users");
}
else {
    userName.forEach(function (user1) {
        if (user1 === "admin") {
            console.log("\n hello ".concat(user1, " , would you like to see a status report?\n              "));
        }
        else {
            console.log("\n \"hello\",".concat(user1, "\"thank you for logging in again.\""));
        }
    });
}
