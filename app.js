// Setting the game values 
let min = 1;
let max = 10;
let winningNum = getRandomNum(min,max);
let guessesLeft = 3;

// defining the UI variables 
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign values from game settings on the UI
minNum.textContent = min;
maxNum.textContent = max;

// play again listener 
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for button click and call the fucntion 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // condition to validate if input number is empty and within the max and min defined 
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a value between ${min} and ${max}`, 'red');
    }

    // check if the input is the winning number 
    if(guess === winningNum){
        // // game over 
        // // disable the imput 
        // guessInput.disabled = true;

        // // change border color to green
        // guessInput.style.borderColor = 'green';

        // // call the set message function 
        // setMessage(`Congratulations! ${winningNum} is the correct number`, 'green');

        gameOver(true, `Congratulations! ${winningNum} is the correct number`);
    } else {
        // wrong number 
        guessesLeft = guessesLeft - 1;
        if(guessesLeft === 0){
            // game over
            // // disable input 
            // guessInput.disabled = true;
            // // set border color to red 
            // guessInput.style.borderColor = 'red';
            // // set message 
            // setMessage(`You lost, the correct number was ${winningNum}`, 'red');

            gameOver(false, `You lost, the correct number was ${winningNum}`)


        } else {
            // game continues 
            // clear the input 
            guessInput.value = '';
            // border color set to yellow
            guessInput.style.borderColor = 'orange';
            // message color to orange
            message.style.color = 'orange';
            // set message 
            setMessage(`Your guess was wrong, you have ${guessesLeft} guesses left`, 'orange');
        }
    }
});

function gameOver(won, msg){

    let color;
    won === true ? color = 'green' : color = 'red';

     // disable the imput 
    guessInput.disabled = true;

    // change border color to green or red
    guessInput.style.borderColor = color;

    // change text color to green or red
    message.style.color = color;

    // call the set message function 
    setMessage(msg);

    // play again 
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// random number generator 
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// set message funtion 
function setMessage(msg){
    message.textContent = msg;
}