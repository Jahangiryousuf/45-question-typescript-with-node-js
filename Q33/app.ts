let numbers :number[] = [1,2,3,4,5,6,7,8,9]

//using forloop
for( let one of numbers){
    let ordinalEnding: string;

   if(one === 1){
    ordinalEnding = "st"
   } 
   else if(one === 2){
    ordinalEnding = "nd"
   } 
   else if(one === 3){
    ordinalEnding = "rd"
   }
   else{
    ordinalEnding = "th"
   }

   console.log(`${one}${ordinalEnding}`);
   
}








