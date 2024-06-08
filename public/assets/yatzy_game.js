import Dice from "./dice.js";

export default class YatzyGame {
    constructor() {

        //initial roll count
        this.rollCount = 0;
        
        //roll 5 dice
        this.die = [];
        for (let i = 0; i < 5; i++) {
            const dice = new Dice();
            this.die.push(dice);
        }
    }

    //Re-rolling dice
    tossUp() {
        for (let dice of this.die) {
            dice.roll(); // Roll each dice
        }
        this.rollCount++;
    }

    getDie() {
        var dieVals = [];
        for(let dice of this.die){
            dieVals.push(dice.diceVal);
        }
        return dieVals;
    }
}