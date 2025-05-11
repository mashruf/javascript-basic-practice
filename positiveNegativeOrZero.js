function postiveNegativeZero(num){
    if(num>0){
        console.log("Positive number");
    }
    else if(num<0){
        console.log("Negative number");
    }
    else{
        console.log("Zero!");
    }
}

const prompt = require('prompt-sync')();
let numberInput = Number(prompt("Enter a number:"));

if(!isNaN(numberInput)){
    postiveNegativeZero(numberInput);
}
else{
    console.log("Enter a valid number");
    
}
