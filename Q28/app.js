var personAge = 1;
if (personAge < 2) {
    console.log("person is a baby");
}
var personAge2 = 3;
if (personAge2 < 4) {
    console.log("person is a toddler");
}
var personAge3 = 10;
if (personAge3 < 13) {
    console.log("a person is a kid");
}
var personAge4 = 18;
if (personAge4 < 20) {
    console.log("person is a teenager");
}
var personAge5 = 60;
if (personAge5 > 20 && personAge5 < 65) {
    console.log("the person is adult");
}
var personAge6 = 66;
if (function (personAge6) { return 65; }) {
    console.log("the person is elder");
}
