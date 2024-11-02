let playerScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        return "ROCK";
    } else if (computerChoice <= 66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }  
}

function updateScore() {
    const displayPlayerScore = document.querySelector("#displayPlayerScore");
    displayPlayerScore.textContent = playerScore;

    const displayComputerScore = document.querySelector("#displayComputerScore");
    displayComputerScore.textContent = computerScore;
}

function updateResults() {
    const playerResults = document.querySelector("#playerResults");
    playerResults.textContent = `${humanSelection}`;

    const computerResults = document.querySelector("#computerResults");
    computerResults.textContent = `${computerSelection}`;

}

function playRound(humanChoice, computerChoice) {
    
    console.log(`
        > Computer: ${computerChoice}
        > Player: ${humanChoice}
    `);
    const outcome = {
        "ROCK-SCISSORS" : "Player",
        "PAPER-ROCK" : "Player",
        "SCISSORS-PAPER" : "Player",
        "SCISSORS-ROCK" : "Computer",
        "ROCK-PAPER" : "Computer",
        "PAPER-SCISSORS" : "Computer"
    };

    let choices = `${humanSelection}-${computerSelection}`
    let winner = outcome[choices];

    console.log(`${humanSelection} ;; ${computerSelection}`)
    if (humanSelection == computerSelection) {
        // Code for tie
    } else if (winner == "Player") {
        playerScore += 1;
    } else if (winner == "Computer") {
        computerScore += 1;
    } else {
        // Code for Invalid
    }

    updateResults();
    updateScore();

    return winner;
}

function startGame() {
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

const selection = document.querySelector("#selection");


selection.addEventListener("click", (event) => {
    let playerSelection = event.target;
    switch (playerSelection.id) {
        case "rock":
            humanSelection = "ROCK";
            break;
        case "paper":
            humanSelection = "PAPER";
            break;
        case "scissors":
            humanSelection = "SCISSORS";
            break;
    };

    startGame();
});  


