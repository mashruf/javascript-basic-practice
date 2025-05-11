function leapYear(year){
    if(year%4!=0 || (year%100==0 && year%400!=0)){
        console.log("Not leap year!");
        
    }
    else{
        console.log("Leap year!");
        
    }
}

const prompt = require('prompt-sync')();
let year = Number(prompt("Enter year:"));

if(!isNaN(year)){
    leapYear(year)
}
else{
    console.log("Enter a year!");
    
}