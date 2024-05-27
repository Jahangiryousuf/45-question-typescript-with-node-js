var friend = ["ali", "hamza", "hanzala", "sarim"];
var dontCome = friend[2];
console.log(dontCome, "can not coming");
friend.splice(2, 1, "amir"); //no 2 index access ,,second number delete element two
friend.forEach(function (invited) {
    return console.log("salam ".concat(invited, ",\"would you like to dinner with me tonight"));
});
