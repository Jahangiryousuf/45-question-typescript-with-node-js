let friend: string[] = ["ali", "hamza", "hanzala", "sarim"];

let dontCome = friend[2]; //hanzala

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

friend.forEach((invited) =>
  console.log(`salam ${invited},"would you like to dinner with me tonight`)
);

console.log("i am waiting all of you");
//
console.log(
  "unfortunately new dinner table wont arrive in time for the dinner",
  "so i can invite only two people for dinner."
);
//using while loop ,,jb tk array ki list me 2 element nh hojate
while (friend.length > 2) {
  let removeGuest = friend.pop();
  console.log(`sorry ${removeGuest}i cant invite yiu to dinner`);
}

console.log("invitation to the last two guest");
// only last 2 guest
friend.forEach(come => console.log(`luckly ${come} you are still invited to dinner`)
)
//removing last 2 guest from pop method
friend.pop();
friend.pop();

console.log("empty list",friend);

