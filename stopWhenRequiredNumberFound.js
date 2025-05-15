function stopWhenRequiredNumberFound(range, numbereWhereToStop){
    for(let i=1; i<=range; i++ ){
        if(i==numbereWhereToStop)
            break;
        console.log(i);
        
    }
    console.log("Loop stopped......");
    
}

const prompt = require('prompt-sync')();

let inputRange = Number(prompt("Enter the range for the loop: "));
let inputStoppage = Number(prompt("Enter the stoppage: "));

if (!([inputRange,inputStoppage].some(Number.isNaN)) && (inputRange>0 && inputStoppage>0)) {
    stopWhenRequiredNumberFound(inputRange,inputStoppage);
}
else{
    console.log("Please enter valid input.");
    
}