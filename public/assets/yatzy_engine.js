import YatzyGame from "./yatzy_game.js"

//initialize game
var game = new YatzyGame();
updateDisplay();

function updateDisplay(){    
    
    //Strings to output
    var dieString = game.getDie().join(',');
    var rollString = "Roll Number: " + game.rollCount;
    
    var diceDisplay = document.getElementById("dice-display"); //gameboard
    var rollNumDisplay = document.getElementById("roll-num-display"); //roll counter
    
    //output to HTML
    diceDisplay.textContent = dieString;
    rollNumDisplay.textContent = rollString;
}
 //toss the 5 die
function tossUp(){
    if(game.rollCount >= 4){
        alert("Total Number of Rolls Acheived")
        game = new YatzyGame();
        updateDisplay();
    }
    game.tossUp();
    updateDisplay();
}

//Controls
function handleKeyPress(event) {
    if (event.keyCode === 32) {//spacebar to toss die
        tossUp();
    } 
}

document.addEventListener("keydown", handleKeyPress); //listen for keyboard inputs




