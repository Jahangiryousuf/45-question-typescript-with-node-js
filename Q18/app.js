var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["japan", "china", "turkey"];
//Print your array in alphabetical order without modifying the actual list
console.log("it is an original order,, ".concat(places));
//making copy array to do alphabetical and sorting it
console.log("alphabetical order", __spreadArray([], places, true).sort());
console.log("still in original order", places);
console.log("reverse  alphabetical order", __spreadArray([], places, true).reverse());
console.log("still in original order", places);
console.log("orignal array reversed", places.reverse());
console.log("back to original order", places.reverse());
//
//  Print the array to show that its order has been changed.
console.log("sorted in alphabrtical order", places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("revers the orignal order", places.reverse());
