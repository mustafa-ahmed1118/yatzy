import YatzyGame from "./yatzy_game.js"

var game = new YatzyGame();

function updateDisplay(){    
    //Strings to output
    var dieVals = [];
    for(let dice of game.die){
        dieVals.push(dice.diceVal);
    }
    var dieString = dieVals.join(',');
    var rollString = "Roll Number: " + game.rollCount;
    
    var diceDisplay = document.getElementById("dice-display"); //gameboard
    var rollNumDisplay = document.getElementById("roll-num-display"); //roll counter
    //output to HTML
    diceDisplay.textContent = dieString;
    rollNumDisplay.textContent = rollString;
}

updateDisplay();

//Controls
function handleKeyPress(event) {
    if (event.keyCode === 32) {//spacebar 
        tossUp();
    } 
}

function tossUp(){
    if(game.rollCount >= 4){
        alert("Total Number of Rolls Acheived")
        game = new YatzyGame();
        updateDisplay();
    }
    game.tossUp();
    updateDisplay();
}

document.addEventListener("keydown", handleKeyPress); //listen for keyboard inputs




