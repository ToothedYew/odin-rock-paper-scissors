function getComputerChoice() {
    let x = (Math.random() * 100) ;
    if (x > 0 && x <= 33) {
        return "rock" ;
    } else if (x > 33 && x <= 66) {
        return "paper" ;
    } else {
        return "scissors" ;
    } 
    } ;

function getHumanChoice() {
    let choice = prompt("Select your move:")
    return choice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a draw! ${humanChoice} equals ${computerChoice}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return `You win! Rock beats scissors!`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return `You lose! Paper beats rock!`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return `You win! Paper beats rock!`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return `You lose! Scissors beats paper!!`
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));