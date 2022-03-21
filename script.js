function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"] ;
    const computerChoice = computerOptions[(Math.floor(Math.random() * computerOptions.length))];
    return computerChoice;
}

function playGame(player, computer){
     if ( player == computer){
         console.log("It's a tie!");
     }
     else if ( (player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper") )
     {
         console.log("You Win!");
     }
     else{
        console.log("You Lose!");
     }

}

// Ask player to choose
const playerSelection = prompt("Rock, Paper, Scissors?");

//computers choice
const computerSelection = computerPlay();
console.log("Computer Selected " + computerSelection);

//Function call to play the game
playGame(playerSelection,computerSelection);














  

