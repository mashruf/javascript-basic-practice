function printNumber(num){
    let i = 1;
    do {
        console.log(i)
        i++;
    } while (i<=num);
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a positive number: "));

if(!isNaN(number) && number>0){
    printNumber(number);
}
else{
    console.log("Please enter a valid positive number");
    
}