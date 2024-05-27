let favFruit :string[] =["orange","peach","mango"]

console.log(favFruit.includes("orange"));

console.log(favFruit.includes("mango"));
console.log(favFruit.includes("peach"));


if(favFruit.includes('mango')){console.log("i really like mango");
}else if(favFruit.includes("peach")){console.log("i really like peach");
}else if(favFruit.includes("orange")){console.log(" i really like orange");
}
else{console.log("i dont like this fruite ");
}