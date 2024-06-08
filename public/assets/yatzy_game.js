// yatzy_game.js
import Dice from "./dice.js";

export default class YatzyGame {
    constructor() {
        this.rollCount = 0;
        this.die = [];
        for (let i = 0; i < 5; i++) {
            const dice = new Dice();
            console.log(`Dice ${i + 1} initialized with value: ${dice.diceVal}`); // Debug statement
            this.die.push(dice);
        }
        console.log("Initial die array:", this.die); // Check the final array
    }

    tossUp() {
        for (let dice of this.die) {
            dice.roll(); // Roll each dice
        }
        this.rollCount++;
    }

    getDie() {
        for (let dice of this.die) {
            console.log(dice.diceVal); // Output the value of each dice
        }
    }
}