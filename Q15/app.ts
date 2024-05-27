let friend: string[] = ["ali", "hamza", "hanzala", "sarim"];

let dontCome = friend[2];

console.log(dontCome, "can not coming");

friend.splice(2, 1, "amir", ); //no 2 index access ,,second number delete element two

friend.forEach((invited) =>
  console.log(`salam ${invited},"would you like to dinner with me tonight`)
);
