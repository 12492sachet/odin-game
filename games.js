let playerScore = 0;
let playerLosses = 0;
let computerScore = 0;
let computerLosses = 0;
let roundsPlayed = 0;
let totalRounds = 5;

function play(playerChoice) {
    if (roundsPlayed < totalRounds) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const result = getResult(playerChoice, computerChoice);

        if (result === 'You win!') {
            playerScore++;
            computerLosses++;
        } else if (result === 'Computer wins!') {
            computerScore++;
            playerLosses++;
        }

        document.getElementById('result').innerHTML = `You chose ${playerChoice}.<br>Computer chose ${computerChoice}.<br>Round ${roundsPlayed + 1} Result: ${result}`;

        updateScores();
        recordRoundResult(playerChoice, computerChoice, result);
        roundsPlayed++;

        if (roundsPlayed === totalRounds) {
            displayWinner();
        }
    }
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateScores() {
    document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`;
    document.getElementById('player-losses').innerHTML = `Player Losses: ${playerLosses}`;
    document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`;
    document.getElementById('computer-losses').innerHTML = `Computer Losses: ${computerLosses}`;
}

function recordRoundResult(playerChoice, computerChoice, result) {
    const roundResultsTable = document.getElementById('round-results');
    const tbody = roundResultsTable.getElementsByTagName('tbody')[0];
    const newRow = tbody.insertRow();
    const roundCell = newRow.insertCell(0);
    const playerChoiceCell = newRow.insertCell(1);
    const computerChoiceCell = newRow.insertCell(2);
    const resultCell = newRow.insertCell(3);

    roundCell.textContent = roundsPlayed;
    playerChoiceCell.textContent = playerChoice;
    computerChoiceCell.textContent = computerChoice;
    resultCell.textContent = result;

    roundResultsTable.style.display = 'table';
}

function displayWinner() {
    let winnerMessage;

    if (playerScore > computerScore) {
        winnerMessage = 'You won the game!';
    } else if (playerScore < computerScore) {
        winnerMessage = 'Computer won the game!';
    } else {
        winnerMessage = 'It\'s a tie!';
    }

    document.getElementById('winner').innerHTML = `${winnerMessage} (Total Rounds Played: ${roundsPlayed})`;
}