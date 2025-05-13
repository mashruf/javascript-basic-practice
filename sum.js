function sum(num){
    let addition = 0;

    for(let i=1; i<=num ; i++){
        addition = addition + i;
    }
    console.log("Summation from 1 to "+num+" is "+addition);
    
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number: "));

if(!isNaN(number) && number>0){
    sum(number);
}
else{
    console.log("Please enter a positive number!");
    
}
