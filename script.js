function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"] ;
    const computerChoice = computerOptions[(Math.floor(Math.random() * computerOptions.length))];
    return computerChoice;
}

function playGame(player, computer,round){
  
     if ( player == computer)
     {
        return `Round No. ${round} is a tie`;
        
     }
     else if ( (player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper") )
     {
         playerCounter++;
         return `You Win Round No. ${round}! ${player} beats ${computer}` ;
         
     }
     else
     {
        computerCounter++;
         return `You Lose Round No. ${round}! ${computer} beats ${player}` ;
        
     }

}

function game(){

    let result,i,n;

    n = prompt("Enter the number of rounds you want to play");

    for ( i = 1; i <=n; i++) 
    { 
    // Ask player to choose
    let playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection = playerSelection.toLowerCase();

    //computers choice
    const computerSelection = computerPlay();
    console.log(`Computer Selected ${computerSelection}`);

    //Function call to play the game
     result = playGame(playerSelection, computerSelection,i);
     console.log(result);
    }

    // Displaying Final results of the game
    console.log(`Final Scores: \n Your Score: ${playerCounter} \n Computer's Score: ${computerCounter}`);

    if(playerCounter == computerCounter)
    {
        console.log("Tie Game!");
    }
    else if (playerCounter > computerCounter)
    {
        console.log("CONGRATULATIONS!!!! YOU WON THE GAME!");
    }
    else{
        console.log("Sorry... You lost the game.");
    }
 
}


let playerCounter = 0 ;
let computerCounter = 0 ;

game();














  

