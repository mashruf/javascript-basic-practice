function printEvenNumber(num){
    for(let i=2; i<=num ; i=i+2){
        console.log(i);
        
    }
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number: "));

if(!isNaN(number) && number>0){
    printEvenNumber(number);
}
else{
    console.log("Enter a positive number please!");
}