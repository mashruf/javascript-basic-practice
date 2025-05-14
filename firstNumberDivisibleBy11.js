function firstNumberDivisibleBy11(start, end){
    let i = start;
    while(i<=end){
        if (i%11==0) {
            return i;
        }
        i++;
    }
    return null;
}


const prompt = require('prompt-sync')();
let number1 = Number(prompt("Enter staring number: "));
let number2 = Number(prompt("Enter ending number: "));


if((!isNaN(number1) || !isNaN(number2)) && (number1>0 && number2>0)){
    console.log("First number to divisible by 11 is "+firstNumberDivisibleBy11(number1, number2));
    
}
else{
    console.log("Please enter positive number!");
    
}