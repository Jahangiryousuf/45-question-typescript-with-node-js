//creating function with parameter which return a value in string
function city_country(city, country) {
    return "".concat(city, " ").concat(country);
}
//calling function ,,return method is only save the value of parameter
city_country("karachi", "pakistan");
console.log(city_country("karachi", "pakistan"));
city_country("tokyo", "japan");
console.log(city_country("tokyo", "japan"));
city_country("berlin", "germany");
console.log(city_country("berlin", "germany"));
