function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"] ;
    const computerChoice = computerOptions[(Math.floor(Math.random() * computerOptions.length))];
    console.log(computerChoice);
}


