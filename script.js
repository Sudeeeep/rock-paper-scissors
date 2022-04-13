const playerSelection = document.querySelectorAll(".btn")
let resultDiv = document.querySelector(".result")

let computerDiv = document.createElement("div");
computerDiv.classList.add("computer");

let winnerDiv = document.createElement("div");
winnerDiv.classList.add("winner");

let scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");

let refresh = document.createElement("div");
refresh.classList.add("new-game");

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

function newGame() {
    window.location.reload();
}

function playGame(player, computer) {

    if (playerCounter < 5 && computerCounter < 5) {
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
}

function displayWinner(playerCounter, computerCounter) {

    scoreDiv.innerText = `YOU: ${playerCounter} 
                          OPPONENT: ${computerCounter}`;
    document.body.append(scoreDiv);
    scoreDiv.style.textAlign = "center";
    scoreDiv.style.marginTop = "1em";

    if (playerCounter == 5 || computerCounter == 5) {

        if (playerCounter > computerCounter) {
            winnerDiv.innerText = "CONGRATULATIONS! YOU WIN!!!!"
            document.body.append(winnerDiv);
            winnerDiv.style.textAlign = "center";
            winnerDiv.style.margin = "1em 0 1em 0";
        } else {
            winnerDiv.innerText = "YOU LOST :( "
            document.body.append(winnerDiv);
            winnerDiv.style.textAlign = "center";
            winnerDiv.style.margin = "1em 0 1em 0";
        }

        refresh.style.cssText = `
        height: 100%;
        width: 30%;
        margin: auto;
        text-align : center;
        border: 2px solid black;
        padding: 0.5em;
        cursor: pointer`
        refresh.textContent = "NEW GAME ?"
        document.body.appendChild(refresh);
        refresh.addEventListener("click", () => newGame())
    }
}