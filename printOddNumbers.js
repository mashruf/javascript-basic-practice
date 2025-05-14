function printOddNumbers(num){
    let i = 1;
    while(i<=num){
        console.log(i);
        i=i+2;
    }
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a positive number: "));

if(!isNaN(number) && number>0){
    printOddNumbers(number);
}
else{
    console.log("Please enter a valid positive number");
    
}