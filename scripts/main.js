console.log("Here we come");

document.addEventListener("DOMContentLoaded", e => {
    let playerRock = document.getElementById('player-rock');
    let playerPaper = document.getElementById('player-paper');
    let playerScissors = document.getElementById('player-scissors');
    let computerRock = document.getElementById('computer-rock');
    let computerPaper = document.getElementById('computer-paper');
    let computerScissors = document.getElementById('computer-scissors');
    let computerRounds = document.getElementById('computer-rounds');
    let playerRounds = document.getElementById('player-rounds');
    let computerGames = document.getElementById('computer-games');
    let playerGames = document.getElementById('player-games');
    let rounds = document.getElementById('rounds');
    let games = document.getElementById('games');
    let message = document.getElementById('message');
    player = [playerRock, playerPaper, playerScissors];
    computer = [computerRock, computerPaper, computerScissors]

    var playerPoints = 0
    var computerPoints = 0

    deselect(player);
    deselect(computer);

    player.forEach(e => {
        e.onclick = function() {
            deselect(player);
            e.classList.add('icon-selected');
            rand = generateRandom();
            deselect(computer);
            computer[rand].classList.add('icon-selected');
            switch(e.id) {
                case 'player-rock':
                    switch(rand) {
                        case 1:
                            computerPoints += 1;
                            increment(computerRounds);
                            break;
                        case 2:
                            playerPoints += 1;
                            increment(playerRounds);
                            break;
                    }
                    break;
                case 'player-paper':
                    switch(rand) {
                        case 0:
                            playerPoints += 1;
                            increment(playerRounds);
                            break;
                        case 2:
                            computerPoints += 1;
                            increment(computerRounds);
                            break;
                    }
                    break;
                case 'player-scissors':
                    switch(rand) {
                        case 0:
                            computerPoints += 1;
                            increment(computerRounds);
                            break;
                        case 1:
                            playerPoints += 1;
                            increment(playerRounds);
                            break;
                    }
                    break;
            }
            increment(rounds);
            if (playerPoints == 2) {
                increment(games);
                increment(playerGames);
                message.innerHTML = "Player won!";
                playerPoints = 0;
                computerPoints = 0;
            } else if (computerPoints == 2) {
                increment(games);
                increment(computerGames);
                message.innerHTML = "Computer won!";
                playerPoints = 0;
                computerPoints = 0;
            }
        }
    });
});

function generateRandom() {
    return Math.floor(Math.random() * 3);
}

function deselect(array) {
    array.forEach(element => {
        element.classList.remove('icon-selected');
    });
}

function increment(e) {
    num = parseInt(e.innerHTML);
    num += 1;
    e.innerHTML = num;
}