const playerSelection = document.querySelectorAll(".btn")
let resultDiv = document.querySelector(".result")

let computerDiv = document.createElement("div");
computerDiv.classList.add("computer");

let winnerDiv = document.createElement("div");
winnerDiv.classList.add("winner");

let scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");

let playerCounter = 0;
let computerCounter = 0;

playerSelection.forEach(player => {

    player.addEventListener("click", () => {
        const playerChoice = player.textContent.trim().toLowerCase();
        const computerChoice = computerSelection();
        playGame(playerChoice, computerChoice);
        displayWinner(playerCounter, computerCounter);
    })

})



function computerSelection() {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice = computerOptions[(Math.floor(Math.random() * computerOptions.length))];
    return computerChoice;
}


function playGame(player, computer) {

    computerDiv.textContent = `Opponent chose ${computer}`;
    document.body.insertBefore(computerDiv, resultDiv);
    computerDiv.style.textAlign = "center";

    if (player == computer) {
        resultDiv.textContent = `It's a tie`;

    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        resultDiv.textContent = `You Win  ${player} beats ${computer}`;
        playerCounter++;

    } else {

        resultDiv.textContent = `You Lose ${computer} beats ${player}`;
        computerCounter++;

    }

}

function displayWinner(playerCounter, computerCounter) {

    scoreDiv.innerText = `YOU: ${playerCounter} 
                          OPPONENT: ${computerCounter}`;
    document.body.append(scoreDiv);
    scoreDiv.style.textAlign = "center";
    scoreDiv.style.marginTop = "1em";
}