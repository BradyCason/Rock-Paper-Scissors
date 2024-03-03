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

function updateResultsUI(resultText){
    resultDiv.children[0].textContent = resultText

    resultDiv.children[1].textContent = "Player Score: " + playerScore.toString()
    resultDiv.children[2].textContent = "Computer Score: " + computerScore.toString()

    if (playerScore >= 3){
        resultDiv.children[0].textContent = "Game Over. You win!"
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore >= 3){
        resultDiv.children[0].textContent = "Game Over. You lose!"
        playerScore = 0
        computerScore = 0
    }
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

const resultDiv = document.querySelector(".results");
let playerScore = 0
let computerScore = 0

// Add Event listeners to buttons
const btns = document.querySelectorAll(".playerChoice");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        resultText = playRound(btn.textContent, getComputerChoice())
        if (resultText[4] == "w"){
            playerScore++
        }
        else if (resultText[4] == "l"){
            computerScore++
        }

        updateResultsUI(resultText)
    })
})