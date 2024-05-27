var friend = ["ali", "hamza", "hanzala", "sarim"];
var dontCome = friend[2]; //hanzala
console.log(dontCome, "can not coming");
//   acceses index (2)hanzala,mnumber (1)means delete 1 element and add amir
friend.splice(2, 1, "amir");
//adding massage for bigger table
console.log("Good News! we have found a bigger table for dinner");
//Inserts new elements at the start of an array, and returns the new length of the array.
friend.unshift("kaleem"); //adding new value srtarting index  in array
//adding new value ending index of array
friend.push("zain");
//ad one new guest at middle index of array
friend.splice(3, 0, "irshad");
friend.forEach(function (invited) {
    return console.log("salam ".concat(invited, ",\"would you like to dinner with me tonight"));
});
console.log("i am waiting all of you");
