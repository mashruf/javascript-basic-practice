function randomNumberDivisibleBy5(range) {
    let randomNumber;
    do {
        randomNumber = Math.floor((Math.random() * range) + 1);
        console.log("Random number is: " + randomNumber);

    } while (randomNumber % 5 != 0)

    console.log("Random number divisible by 5 is: " + randomNumber + ". Loop stopped.....");
}

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter the range: "));

if (!isNaN(number) && number > 0) {
    randomNumberDivisibleBy5(number);
}
else {
    console.log("Please enter a valid positive range!");

}




