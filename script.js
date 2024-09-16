function getComputerChoice(){
    const RPS = ['rock', 'paper', 'scissors'];
    let ran = (Math.floor(Math.random() * 3));
    // console.log(ran)
    return RPS[ran]
}

function getHumanChoice(){
    let UserInput = prompt("Enter you choice!", "rock paper scissors"); //"rock paper scissors"
    return UserInput
}

let humanChoice = (getHumanChoice()).toLowerCase();
// console.log(humanChoice)
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Draw"
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore +=1
        return ["You win", `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore +=1
        return ["You win", `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore +=1
        return ["You win", `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
    }else if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")){
        return ["Wrong input", `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
    }else{
        computerScore += 1
        return ["You lose", `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
    }
}

console.log(playRound(humanChoice, computerChoice))
// console.log(humanChoice)
// console.log(computerChoice)

// playRound(humanChoice, computerChoice)
// console.log(playRound(humanChoice, computerChoice))

// console.log(getComputerChoice())
// console.log(getHumanChoice())