function trafficLightSignal(signal){
    switch (signal) {
        case "green":
            console.log("Go!");
            
            break;
        case "yellow":
            console.log("slow down!");
            
            break;
        case "red":
            console.log("stop!");
            
            break;
    
        default:
            console.log("Invalid signal");
            
    }
}
const prompt = require('prompt-sync')();
let signalInput = prompt("Enter the signal:");
signalInput = signalInput.toLowerCase();

trafficLightSignal(signalInput);



