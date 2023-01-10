// JavaScript

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;
let round = 0;

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

    console.log(winner);
    game(winner);
}

function reset() {
    let body = document.querySelector('body');
    let announcement = document.createElement('div');
    body.appendChild(announcement);
    
    if (playerScore > computerScore) {
        announcement.textContent = "Result: You is the FINAL WINNER!";
    } else if (playerScore < computerScore) {
        announcement.textContent = "Result: Computer is the FINAL WINNER!";
    } else if (playerScore == computerScore) {
        announcement.textContent = "Result: There is no winner :(";
    }

    playerScore = computerScore = round = 0;
}

function game(result) {
    const roundContainer = document.querySelector(".round");
    const playerScoreC = document.querySelector(".playerScore");
    const computerScoreC = document.querySelector(".computerScore");

    // console.log(`Round ${i+1}: `);
    console.log(`Player: ${playerSelection}\tComputer: ${computerSelection}`);
    if (result === "player") {
        playerScore++;
        round++;
        roundContainer.textContent = `Round ${round}: Player Wins!`;
        playerScoreC.textContent = `${playerScore}`;
    } else if (result === "computer") {
        computerScore++;
        round++;
        roundContainer.textContent = `Round ${round}: Computer Wins!`;
        computerScoreC.textContent = `${computerScore}`;
    } else if (result === "none") {
        round++;
        roundContainer.textContent = `Round ${round}: It's a Tie!`;
    }

    // console.log(`Player: ${playerScore}\tComputer: ${computerScore}`);

    if (playerScore == 5 || computerScore == 5) 
        reset();
}

const buttons = document.querySelectorAll('.choice');
console.log(buttons);

buttons.forEach(button => 
    button.addEventListener('click', function() {
        console.log(button.getAttribute("id"));
        playRound(button.getAttribute("id"), getComputerChoice());
    })
);
    
const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click',reset);

game();
