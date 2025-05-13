function print1To20(num){
    for(let i=1; i<=num; i++){
        console.log(i);
    }
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number"));

if(!isNaN(number) && number>0){
    print1To20(number);
}
else{
    console.log("You can enter a positive number only");
    
}