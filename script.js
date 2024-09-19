function getComputerChoice(){
    const RPS = ['rock', 'paper', 'scissors'];
    let ran = (Math.floor(Math.random() * 3));
    return RPS[ran]
}

const options = document.querySelector("#options");

options.addEventListener("click", (e) =>{
    const buttonId = e.target;
    const result = playRound(buttonId.id);
    addScore(result);
})

function addScore(arr){
    let userScore = document.querySelector("#user-score");
    let compScore = document.querySelector("#computer-score");
    let userPick = document.querySelector("#user-pick");
    let compPick = document.querySelector("#computer-pick");
    let result = document.querySelector("#result");


    if (arr[0] === "You win"){
        userScore.textContent = Number(userScore.textContent) + 1;
    }else if (arr[0] === "You lose"){
        compScore.textContent = Number(compScore.textContent) + 1;
    }

    result.textContent = arr[0].toUpperCase();
    userPick.textContent = `Your pick : ${arr[1].toUpperCase()}`;
    compPick.textContent = `Computer pick :${arr[2].toUpperCase()}`;
}

function playRound(userChoice){

    const humanChoice = userChoice;
    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        return ["Draw", humanChoice, computerChoice]
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        return ["You win", humanChoice, computerChoice]
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        return ["You win", humanChoice, computerChoice]
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        return ["You win", humanChoice, computerChoice]
    }else if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")){
        return ["Wrong input"]
    }else{
        return ["You lose", humanChoice, computerChoice]
    }
}