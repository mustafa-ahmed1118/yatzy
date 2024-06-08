import Dice from "./dice.js";

export default class YatzyGame {
    constructor() {

        //initial roll count
        this.rollCount = 0;
        
        //roll 5 dice
        this.dice = [];
        for (let i = 0; i < 5; i++) {
            const dice = new Dice();
            this.dice.push(dice);
        }
    }

    //Re-rolling dice
    tossUp() {
        for (let dice of this.dice) {
            dice.roll(); // Roll each dice
        }
        this.rollCount++;
    }

    getDice() {
        var diceVals = [];
        for(let dice of this.dice){
            diceVals.push(dice.diceVal);
        }
        return diceVals;
    }
}