let places: string[] = ["japan", "china", "turkey"];
//Print your array in alphabetical order without modifying the actual list

console.log(`it is an original order,, ${places}`);

//making copy array to do alphabetical and sorting it
console.log("alphabetical order", [...places].sort());

console.log("still in original order", places);

console.log(`reverse  alphabetical order`, [...places].reverse());

console.log("still in original order", places);

console.log("orignal array reversed", places.reverse());

console.log("back to original order", places.reverse());
//
//  Print the array to show that its order has been changed.
console.log("sorted in alphabrtical order", places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("revers the orignal order",places.reverse());
