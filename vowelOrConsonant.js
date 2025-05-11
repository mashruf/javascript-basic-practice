function vowelOrConsonant(char){
    if(/^[aeiouAEIOU]$/.test(char) ){
        return "Vowel!";
    }
    else if(/^[a-zA-Z]$/.test(char)){
        return "Consonent!";
    }
    else{
        return "Invalid input";
    }
}

const prompt = require('prompt-sync')();
let input = prompt("Enter a letter:");

console.log(vowelOrConsonant(input));
