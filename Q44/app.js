// define function with rest parameter that accept items arguments representing a sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making sandwich with following items \n");
    items.forEach(function (single_item) { return console.log(single_item); });
    console.log("\n now enjoy sandwich");
}
//  call function 3ree times with different numer of argument
make_sandwich("chicken ", "chees", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "mayo", "egg", "ketchup", "chess");
