<?php

class Dice
{
    private $sides;
    private $diceVal;

    // Constructor to initialize the dice with a default of 6 sides
    public function __construct()
    {
        $this->sides = 6;
        $this->diceVal = rand(1, $this->sides);
    }

    public function roll()
    {
        $this->diceVal = rand(1, $this->sides);
        return $this->diceVal;
    }


    public function getValue()
    {
        return $this->diceVal;
    }
}

// Example output
$dice = new Dice();
echo "Initial roll: " . $dice->getValue() . "\n";
echo "New roll: " . $dice->roll() . "\n";