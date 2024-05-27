// define a function to create a car object with optional option

function create_car (manufacture , model, ... option){
    let car = {
        manufacture  :manufacture,
        model : model,

    };
    // add optional addition
    option.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim()
    })
    return car
}

// call function to create a car object 

let my_car = create_car("toyota", "corolla", "color : black","sunroof : true", "year : 2020");

//  printing function to check 
console.log(my_car);
