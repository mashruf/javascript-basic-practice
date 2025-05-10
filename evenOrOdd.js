function evenOrOdd(number){
    if(number%2==0){
        console.log("Even number!");
        
    }
    else if(number%2!=0){
        console.log("Odd number!");
    }
}

const prompt = require('prompt-sync')();

let numInput = prompt("Enter Number: ");
let num = Number(numInput);


if(!isNaN(num)){
    evenOrOdd(num);        
}
else{
    console.log("Enter valid number!");
}