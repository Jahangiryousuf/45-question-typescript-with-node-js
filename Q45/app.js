// define a function to create a car object with optional option
function create_car(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
    };
    // add optional addition
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call function to create a car object 
var my_car = create_car("toyota", "corolla", "color : black", "sunroof : true", "year : 2020");
//  printing function to check 
console.log(my_car);
