export default class Dice {
    constructor() { // Default to a 6-sided dice
        this.sides = 6;
        this.diceVal = Math.floor(Math.random() * this.sides) + 1;
        /*
        For rollState:
        true = re-roll
        false = keep 
        */
        this.rollState = true;
    }

    // Method to roll the dice and return a random number between 1 and this.sides
    roll() {
    var newRoll = Math.floor(Math.random() * this.sides) + 1;
    this.diceVal = newRoll;
    }
}



