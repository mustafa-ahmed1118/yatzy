<?php
namespace Yatzy\Test;

use Yatzy\YatzyGame;
use Yatzy\Dice;
use PHPUnit\Framework\TestCase;

class YatzyGameTest extends TestCase
{
    public function testConstructor()
    {
        $game = new YatzyGame();

        $this->assertCount(5, $game->getDice());

        $this->assertEquals(0, $game->getRollCount());

        foreach ($game->getDice() as $die) {
            $this->assertInstanceOf(Dice::class, $die);
        }

        foreach ($game->getDiceValues() as $value) {
            $this->assertGreaterThanOrEqual(1, $value);
            $this->assertLessThanOrEqual(6, $value);
        }
    }

    public function testTossUp()
    {
        $game = new YatzyGame();

        $this->assertEquals(0, $game->getRollCount());

        $initialValues = $game->getDiceValues();

        $game->tossUp();

        $this->assertEquals(1, $game->getRollCount());

        foreach ($game->getDiceValues() as $value) {
            $this->assertGreaterThanOrEqual(1, $value);
            $this->assertLessThanOrEqual(6, $value);
        }

        $newValues = $game->getDiceValues();
        $this->assertNotEquals($initialValues, $newValues, "One die should change after toss.");
    }

    public function testGetDiceValues()
    {
        $game = new YatzyGame();

        $initialValues = $game->getDiceValues();
        $this->assertCount(5, $initialValues);

        $game->tossUp();
        $rolledValues = $game->getDiceValues();
        $this->assertCount(5, $rolledValues);

        foreach ($rolledValues as $value) {
            $this->assertGreaterThanOrEqual(1, $value);
            $this->assertLessThanOrEqual(6, $value);
        }
    }
}
