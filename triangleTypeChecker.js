function triangleTypeChecker(side1, side2, side3){
    if((side1==side2 && side1==side3) || (side2==side1 && side2==side3) || (side3==side1 && side3==side2) ){
        console.log("Equilateral");
    }
    else if(side1==side2 || side2==side3 || side1==side3){
        console.log("Isosceles");    
    }
    else{
        console.log("Scalene");
    }
}

const prompt = require('prompt-sync')();
let side1Input = Number(prompt("Enter 1st side:"));
let side2Input = Number(prompt("Enter 2nd side:"));
let side3Input = Number(prompt("Enter 3rd side:"));

if(!([side1Input,side2Input,side3Input].some(Number.isNaN))){
    triangleTypeChecker(side1Input,side2Input,side3Input);
}
else{
    console.log("Enter valid input");
    
}