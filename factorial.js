function factorial(num){
    let fact = 1;
    for(let i=num; i>0 ; i--){
        fact = fact * i;    
    }
    console.log("Factorial is: "+fact);
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number for multiplication table: "));

if(!isNaN(number) && number>0){
    factorial(number);
}
else if(number==0){
    console.log("Factorial is: 1");
    
}
else{
    console.log("Please enter a positive number!");
    
}