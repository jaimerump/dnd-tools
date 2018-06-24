const assert = require('assert');
const DiceRoller = require('./../lib/dice-roller.js');

describe('DiceRoller', () => {

  describe('.rollDice', () => {

  }); // describe('.rollDice')

  describe('.dicePermutations', () => {

  }); // describe('.dicePermutations')

  describe('dropRolls', () => {

    it('high drops the highest roll', () => {

      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'high', 1), [5,4]);

    }); // it('high drops the highest roll')

    it('low drops the lowest roll', () => {

      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'low', 1), [6,5]);

    }); // it('low drops the lowest roll')

    it('any other strategy drops no rolls', () => {

      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'none', 1), [6,5,4]);

    }); // it('any other strategy drops no rolls')

    it('can drop multiple rolls', () => {
      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'low', 2), [6]);
    }); // it('can drop multiple rolls')

    it('always leaves at least one die', () => {
      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'low', 4), [6]);
    }); // it('always leaves at least one die')

    it('keeps all when given negative count', () => {
      assert.deepEqual(DiceRoller.dropRolls([6,5,4], 'low', -1), [6,5,4]);
    }); // it('keeps all when given negative count')

  }); // describe('dropRolls')

}); // describe('DiceRoller')