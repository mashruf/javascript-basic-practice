function cumulativeSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    console.log("The sum is: "+sum);
    
}

cumulativeSum(10);