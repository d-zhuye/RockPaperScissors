let playerScore = 0;
let computerScore = 0;

function updateScore() {
    const displayPlayerScore = document.querySelector("#displayPlayerScore");
    displayPlayerScore.textContent = playerScore;

    const displayComputerScore = document.querySelector("#displayComputerScore");
    displayComputerScore.textContent = computerScore;
}


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

let humanSelection;
let computerSelection = getComputerChoice();

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
        console.log(`Player Wins. Score ${playerScore}`);
    } else if (winner == "Computer") {
        computerScore += 1;
        console.log(`Computer Wins. Score ${computerScore}`);
    } else {
        // Code for Invalid (Default)
    }

    updateScore();
}



const selection = document.querySelector("#selection");

selection.addEventListener("click", (event) => {
    let playerSelection = event.target;
    switch (playerSelection.id) {
        case "rock":
            console.log("you selected rock.")
            humanSelection = "ROCK";
            break;
        case "paper":
            console.log("you selected paper.")
            humanSelection = "PAPER";
            break;
        case "scissors":
            console.log("you selected scissors.")
            humanSelection = "SCISSORS";
            break;
    };

    getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
});



