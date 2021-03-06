////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt('Your Choice:');
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } 
    else if (randomNumber < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (playerMove === 'rock') {
        winner = (computerMove == 'paper') ? 'computer' : 'player';    
    }
    else if (playerMove === 'scissors') {
        winner = (computerMove == 'rock') ? 'computer' : 'player';
    }
    else if (playerMove === 'paper') {
        winner = (computerMove == 'scissors') ? 'computer' : 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins += 1;
        }
        else if (winner === 'computer'){
            computerWins += 1;
        }
        console.log("You chose " + playerMove + " and the computer chose " + computerMove);
        if (winner == "tie") {
            console.log("It's a tie!");
        }
        else {
        console.log("The winner is " + winner);
          }
        console.log("The score is Player: " + playerWins + " Computer: " + computerWins);
    }
    if (playerWins > computerWins) {
        console.log("You win!");
    }
    else {
        console.log("The computer wins. Better luck next time.");
    }
    return [playerWins, computerWins];
}

playToFive();
