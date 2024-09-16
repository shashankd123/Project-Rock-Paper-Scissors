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

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Draw"
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        // humanScore +=1
        return "You win"
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        // humanScore +=1
        return "You win"
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        // humanScore +=1
        return "You win"
    }else if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")){
        return "Wrong input"
    }else{
        // computerScore += 1
        return "You lose"
    }
}

function playGame(){
    let result = []
    let i = 0;
    let humanScore = 0;
    let computerScore = 0; 
    while (i < 5){
        i = i+1;
        let humanChoice = (getHumanChoice()).toLowerCase();
        let computerChoice = getComputerChoice();
        let res = playRound(humanChoice, computerChoice);
        result.push(res)
        if(res == "You win"){
            humanScore += 1;
        }else if(res == "You lose"){
            computerScore += 1;
        }
    }
    return [result, `Your score = ${humanScore}`, `Computer score = ${computerScore}`]
}

console.log(playGame())

// console.log(playRound(humanChoice, computerChoice))
// console.log(humanChoice)
// console.log(computerChoice)

// playRound(humanChoice, computerChoice)
// console.log(playRound(humanChoice, computerChoice))

// console.log(getComputerChoice())
// console.log(getHumanChoice())