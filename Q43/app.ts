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
// console.log( make_great(magician_name));

// console.log(show_magician(magician_name));
///

//  Q 43
// making copy of ariginal array thorugh .slice()

let copy_magician_name = magician_name.slice()

 let copygreat_magician = make_great(copy_magician_name)

 
 show_magician(magician_name)
 
show_magician(copygreat_magician)







