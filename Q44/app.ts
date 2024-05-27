
// define function with rest parameter that accept items arguments representing a sandwich
function make_sandwich(...items : string[]){
    console.log("making sandwich with following items \n");
    items.forEach(single_item => console.log(single_item)
    )
    console.log("\n now enjoy sandwich");
    
    
}


//  call function 3ree times with different numer of argument

make_sandwich("chicken ","chees", "mayo", "egg")

make_sandwich("bread", "butter")

make_sandwich("bread","butter","mayo","egg","ketchup","chess")

