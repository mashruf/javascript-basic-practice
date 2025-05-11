function rockPaperScissors(player1, player2){
    if(player1=="rock" && player2=="paper"){
        console.log("Player 2 wins!");
        
    }
    else if(player2=="rock" && player1=="paper"){
        console.log("Player 1 wins!");
        
    }
    else if(player1=="paper" && player2=="scissors"){
        console.log("Player 2 wins!");
        
    }
    else if(player1=="scissors" && player2=="paper"){
        console.log("Player 1 wins!");
        
    }
    else if(player1=="scissors" && player2=="rock"){
        console.log("Player 2 wins!");
        
    }
    else if(player1=="rock" && player2=="scissors"){
        console.log("Player 1 wins!");
        
    }
    else{
        console.log("Invalid input. Please enter rock or paper or scissors.");
        
    }
}

const prompt = require('prompt-sync')();

let first_player = prompt("First plyer rock/paper/scissors:");
first_player = first_player.toLowerCase();
let second_player = prompt("Second plyer rock/paper/scissors:");
second_player = second_player.toLowerCase();

rockPaperScissors(first_player, second_player);