var mango = "mango";
//tesr for equality and unequality
console.log("equality test ");
console.log(mango == "mango");
console.log("\n \"unequality test\"");
console.log("\n ".concat(mango != "mango"));
//using lower case function
var upperCase = "apple";
console.log("upper case is equal to apple after lowercase");
console.log(upperCase.toLowerCase() == "apple");
console.log("\n upper case is not equal to apple after lowercase");
console.log(upperCase.toLowerCase() != "apple");
var five = 5;
var ten = 10;
//numerical test
console.log("\n is 5 is equal to 10?");
console.log("\n ".concat(five == ten));
console.log(" is 5 is not equal to 10?");
console.log("\n ".concat(five != ten));
console.log("\n is five is greater than 2");
console.log("\n ".concat(five > 2));
console.log("\n is 50 smaller than 40");
console.log("\n ".concat(50 < 40));
//greater than or equal to
console.log("\n is 78 >= 68");
console.log("\n ".concat(78 >= 68));
// less than or equal to
console.log("\n is 30 less than or equal to 20");
console.log("\n ".concat(30 <= 20));
//using (&) or (|) operator
var forty = 40;
var twenty = 20;
console.log("\n 40 is not equal to 20 and 40 is greater than 20");
console.log("\n ".concat(forty != twenty && forty > twenty));
//using || (OR)
console.log("\n twenty greater than forty or  less than forty ");
console.log("\n ".concat(twenty > forty || twenty < forty));
console.log("\n forty  is not greater than twenty or not less than twenty ");
console.log("\n ".concat(forty < twenty || forty == twenty));
//Test whether an item is in a array
var stationary = ["pencil", "copy", " eraser"];
console.log("\n is pencil in my array ?");
console.log(stationary.includes("pencil"));
console.log("\n is pencil in not in my array ");
console.log("\n ".concat(!stationary.includes));
