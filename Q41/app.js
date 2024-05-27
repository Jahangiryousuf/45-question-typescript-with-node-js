// function show_magician (magician : string[]){
//     console.log(magician.forEach(name => console.log(name)
//     ));
// }
// // defining array containing magician name
// let magician_name : string[] = ["samri","harry","lisa","baba"]
// // calling function 
// show_magician(magician_name)
var magician_name = ["harry", "lisa", "samri", "baba"];
function show_magician(magician_name) {
    magician_name.forEach(function (magician) { return console.log(magician); });
}
show_magician(magician_name);
