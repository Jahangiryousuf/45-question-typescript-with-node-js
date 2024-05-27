function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in  ").concat(country));
}
//country is a default  and city value void we should add city value
describe_city('karachi');
describe_city("lahore");
//change other city which is not in pakistan
describe_city("uk", "london");
