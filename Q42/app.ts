let magician_name :string[] = ["harry","lisa","smarm","baba"]

function show_magician( magician_name : string[])
{
 magician_name.forEach( magician => console.log(magician)
 )   
}

//  MODIFY FUNCTION ARRAY BY .MAP METHOD

function make_great (magician :string []){
 return magician_name.map(name => `the great ${name}`)
}

//  make_great(magician_name)
 console.log( make_great(magician_name));

// console.log(show_magician(magician_name));



