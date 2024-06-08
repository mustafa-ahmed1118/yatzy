export default class Dice {
    constructor() {
        this.sides = 6;
        this.diceVal = Math.floor(Math.random() * this.sides) + 1;
        
        this.rollState = true;
        /*
        rollState values:
        true = re-roll
        false = keep 
        */
    }

    // Method to roll the dice and return a random number between 1 and 6
    roll() {
    var newRoll = Math.floor(Math.random() * this.sides) + 1;
    this.diceVal = newRoll;
    }
}



