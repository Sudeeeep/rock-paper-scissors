function computerSelection() {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice = computerOptions[(Math.floor(Math.random() * computerOptions.length))];
    return computerChoice;

}



let computerChoice = computerSelection();

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let resultDiv = document.querySelector(".result")

let computerDiv = document.createElement("div");
computerDiv.style.textAlign = "center";
document.body.insertBefore(computerDiv, resultDiv);

rock.addEventListener("click", () => {
    playGame(rock.textContent.toLowerCase(), computerChoice);
});
paper.addEventListener("click", () => {
    playGame(paper.textContent.toLowerCase(), computerChoice);
});
scissors.addEventListener("click", () => {
    playGame(scissors.textContent.toLowerCase(), computerChoice);
});


function playGame(player, computer) {

    computerDiv.textContent = `Opponent chose ${computer}`;

    {
        if (player == computer) {
            resultDiv.textContent = `It's a tie`;

        } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
            resultDiv.textContent = `You Win  ${player} beats ${computer}`;

        } else {

            resultDiv.textContent = `You Lose ${computer} beats ${player}`;

        }
    }
}


// let playerCounter = 0;
// let computerCounter = 0;