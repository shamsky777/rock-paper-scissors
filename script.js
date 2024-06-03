console.clear();

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

// const score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//     resetScore: function resetScore(){
//         score.wins = 0;
//         score.losses = 0;
//         score.ties = 0;
//         console.log(score)
//     },
// }

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElements();
    console.log(score)
}

function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < (1/3)){
        computerMove = 'rock';
    } else if (randomNumber >= (1/3) && randomNumber < (2/3)){
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    };

    return computerMove;
}

function playGame(playerMove){
    let computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'rock') {
        if(computerMove === 'rock'){
            result =  'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You Lose!';
        } else {
            result = 'You Win!';
        }
    }

    if(playerMove === 'paper') {
        if(computerMove === 'paper'){
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You Lose!';
        } else {
            result = 'You Win!';
        }
    }

    if(playerMove === 'scissors') {
        if(computerMove === 'scissors'){
            result = 'Tie.';
        } else if (computerMove === 'rock') {
            result = 'You Lose!';
        } else {
            result = 'You Win!';
        }
    }

    if(result === 'You Win!'){
        score.wins += 1;
    } else if (result === 'You Lose!'){
        score.losses += 1;
    } else if(result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    console.log(score); 

    updateScoreElements();

    document.querySelector('.result')
        .innerHTML = `${result}`;
    
    document.querySelector('.moves')
        .innerHTML = `You<img src="image/${playerMove}-emoji.png" class="move-icon">
        <img src="image/${computerMove}-emoji.png" class="move-icon"> Computer`;

    /*
    alert(`
    You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `)
    console.log(`
    You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `)
    */
}

function updateScoreElements() {
    document.querySelector('.score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
updateScoreElements()