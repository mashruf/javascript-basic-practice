const prompt = require('prompt-sync')();
let userInput;
do {
   userInput = Number(prompt("Enter a number greater than zero: "));
} while (isNaN(userInput) || userInput<=0);

console.log("You entered: "+userInput);
