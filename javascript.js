/* 
1. Write function that randomly returns R,P,S.
1a. create function called getComputerChoice
*/

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let gameCount = 1; gameCount <= 5; gameCount++) {
        console.log(`Game: ${gameCount}`);
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
        
        function getHumanChoice() {
            let humanChoice = prompt("Rock, Paper, or Scissors?");
            let humanUpper = humanChoice.toUpperCase();
            if (humanUpper == "PAPER" || humanUpper == "ROCK" || humanUpper == "SCISSORS") {
                return humanUpper;
            } else {
                console.log("Invalid Choice. Please enter Rock, Paper, or Scissors.");
            }
            
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
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
        
            if (humanSelection == computerSelection) {
                console.log(`
                    It's a tie!`)
            } else if (winner == "Player") {
                playerScore += 1;
                console.log(`
                    Player Wins! ${humanSelection} beats ${computerSelection}.`)
            } else if (winner == "Computer") {
                computerScore += 1;
                console.log(`
                    Computer Wins! ${computerSelection} beats ${humanSelection}.`)
            } else {
                console.log("Invalid game. Try again!");
            }

            console.log(`
                Current Scores:
                > Computer: ${computerScore}
                > Player: ${playerScore}
            `);
        }
        
        
        playRound(humanSelection, computerSelection);

        
    }

}

playGame();

