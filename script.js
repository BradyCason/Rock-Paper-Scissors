function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3)
    if (randInt == 1){
        return "Rock"
    }
    else if (randInt == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return "Tie! You both played Rock!"
        }
        else if (computerSelection == "paper"){
            return "You lose! Paper beats Rock!"
        }
        else{
            return "You win! Rock beats Scissors!"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!"
        }
        else if (computerSelection == "paper"){
            return "Tie! You both played Paper!"
        }
        else{
            return "You lose! Scissors beats Paper!"
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats Scissors!"
        }
        else if (computerSelection == "paper"){
            return "You win! Scissors beats Paper!"
        }
        else{
            return "Tie! You both played Scissors!"
        }
    }
    return 'Please Input "Rock", "Paper", or "Scissors"'
}

function playGame(){
    console.log("Playing Best of 3 Rock-Paper-Scissors.")
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 3 && computerScore < 3){
        gameResult = playRound(prompt('Type "Rock", "Paper", or "Scissors": '), getComputerChoice())
        
        if (gameResult[4] == "w"){
            playerScore++
        }
        else if (gameResult[4] == "l"){
            computerScore++
        }
        
        console.log(gameResult)
        console.log("Score:\n-Player: " + playerScore.toString() + "\n-Computer: " + computerScore.toString())
        
    }

    if (playerScore > computerScore){
        console.log("You win!")
    }
    else{
        console.log("You lose!")
    }
}

playGame()