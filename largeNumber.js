function largeNumber(num1, num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    return "none of them";
}

console.log("Larger number is "+largeNumber(4,5));