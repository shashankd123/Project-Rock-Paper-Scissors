function getComputerChoice(){
    RPS = ['rock', 'paper', 'scissors']
    ran = (Math.floor(Math.random() * 3))
    // console.log(ran)
    return RPS[ran]
}

console.log(getComputerChoice())