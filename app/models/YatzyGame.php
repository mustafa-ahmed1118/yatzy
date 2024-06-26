<?php
require_once 'Dice.php';

class YatzyGame
{
    private $dice;
    private $rollCount;

    public function __construct()
    {

        //initialize 5 dice
        $this->dice = [];
        for ($i = 0; $i < 5; $i++) {
            $this->dice[] = new Dice();
        }
        $this->rollCount = 0;
    }

    //toss all 5 dice
    public function tossUp()
    {
        foreach ($this->dice as $die) {
            $die->roll();
        }
        $this->rollCount++;
    }

    //retreiving functions
    public function getRollCount()
    {
        return $this->rollCount;
    }

    public function getDice()
    {
        return $this->dice;
    }
    public function getDiceValues()
    {
        $values = [];
        foreach ($this->dice as $die) {
            $values[] = $die->getValue();  // Get the value of each Dice object
        }
        return $values;  // Return an array of integers
    }
}

//example usage
$game = new YatzyGame();
echo "Initial dice values: " . implode(', ', $game->getDiceValues()) . "\n";
$game->tossUp();
echo "After roll dice values: " . implode(', ', $game->getDiceValues()) . "\n";
echo "Total rolls: " . $game->getRollCount() . "\n";