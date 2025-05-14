function sumOfNumber(num){
    let sum = 0;

    while(num>0){
        sum = sum + (num%10);
        num = Math.floor(num/10);
    }
    return sum;
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a positive number: "));

if(!isNaN(number) && number>0){
    console.log(sumOfNumber(number));
    
}
else{
    console.log("Please enter a valid positive number!");
    
}