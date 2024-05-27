var magician_name = ["harry", "lisa", "smarm", "baba"];
function show_magician(magician_name) {
    magician_name.forEach(function (magician) { return console.log(magician); });
}
//  MODIFY FUNCTION ARRAY BY .MAP METHOD
function make_great(magician) {
    return magician_name.map(function (name) { return "the great ".concat(name); });
}
//  make_great(magician_name)
// console.log( make_great(magician_name));
// console.log(show_magician(magician_name));
///
//  Q 43
// making copy of ariginal array thorugh .slice()
var copy_magician_name = magician_name.slice();
var copygreat_magician = make_great(copy_magician_name);
show_magician(magician_name);
show_magician(copygreat_magician);
