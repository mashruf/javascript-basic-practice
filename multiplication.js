function multiplication(num){
    let mul;
    for(let i=1; i<=10 ; i++){
        mul = i * num;
        console.log(i+"*"+num+"="+mul);    
    }
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number for multiplication table: "));

if(!isNaN(number) && number>0){
    multiplication(number);
}
else{
    console.log("Please enter a positive number!");
    
}