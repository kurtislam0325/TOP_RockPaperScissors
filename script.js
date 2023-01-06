// JavaScript

let playerSelection;
let computerSelection;

function getComputerChoice() {
    let computerChoice = "rock";
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber >= 0 && randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let winner = "none";

    if (playerSelection === computerSelection) {
        winner = "none";
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")) {
        winner = "player";
    } else {
        winner = "computer";
    }

    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let result = "none";
    for (let i = 0; i < 5; i++) {

        playerSelection = window.prompt("Rock, Paper, Scissors!");
        computerSelection = getComputerChoice();

        // case-sensitive testing
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.trim();
        console.log(playerSelection);
        if (playerSelection === null)
            break;
        else {
            while (true) {
                playerSelection = window.prompt("Rock, Paper, Scissors! *Please type the correct words");
                if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")
                    break;
            }
        }

        result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i+1}: `);
        console.log(`Player: ${playerSelection}\tComputer: ${computerSelection}`);
        if (result === "player") {
            playerScore++;
            console.log("Player Wins!");
        } else if (result === "computer") {
            computerScore++;
            console.log("Computer Wins!");
        } else if (result === "none") {
            console.log("It's a Tie");
        }

        console.log(`Player: ${playerScore}\tComputer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You is the FINAL WINNER!")
    } else if (playerScore < computerScore) {
        console.log("Computer is the FINAL WINNER!")
    } else if (playerScore == computerScore) {
        console.log("There is no winner :(")
    }
}

game();
