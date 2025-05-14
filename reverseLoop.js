function reverseLoop(num){
    let i=num;
    while(i>0){
        console.log(i);
        i--;
    }
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a positive number: "));

if(!isNaN(number) && number>0){
    reverseLoop(number);
}
else{
    console.log("Please enter a valid positive number!");
    
}