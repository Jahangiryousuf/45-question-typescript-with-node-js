"use strict";
function makeShirt(size = "large", printmassage = "i love type script") {
    console.log(`creating ${size} shirt with the ${printmassage} print on it `);
}
//calling function  by default value
makeShirt(); // result,,,,,creating large shirt with the i love type script print on
// calling function with adding value , with default  print massage
makeShirt("medium");
makeShirt("small", "i love pakistan");
