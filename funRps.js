
//creation of object
let score = JSON.parse(localStorage.getItem('score')) ||  {wins:0,
loses:0,
ties:0}; // default operator

// if(score===null){
//     score = {
//         wins:0,
//         loses:0,
//         ties:0
//     };
// }

function playGame(playerMove) {

    let computerMove = '';
    let result = '';
    pickCmove();
    if (playerMove === 'Rock') {
        
        if (computerMove === 'Rock') {
            result = 'it\'s Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else if (computerMove === 'Scissor') {
            result = 'You Win';
        }

    } else if (playerMove === 'Paper') {

        if (computerMove === 'Paper') {
            result = 'it\'s Tie';
        } else if (computerMove === 'Scissor') {
            result = 'You Lose';
        } else if (computerMove === 'Rock') {
            result = 'You Win';
        }

    } else if (playerMove === 'Scissor') {

        if (computerMove === 'Scissor') {
            result = 'it\'s Tie';
        } else if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        }

    }

    if(result === 'You Win'){
        score.wins++;
    }else if(result === 'You Lose'){
        score.loses++;
    }else if(result ==='it\'s Tie' ){
        score.ties++;
    }
    
    localStorage.setItem('score',JSON.stringify(score));

    alert(`your choice is ${playerMove} and computer choice is ${computerMove} , ${result}
    wins:${score.wins},losses:${score.loses},Ties:${score.ties}`);

    
    function pickCmove() {
        const randomNumber = Math.random();
    
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'Rock';
        } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'Paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'Scissor';
        }
    }
}