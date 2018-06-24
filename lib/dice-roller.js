/**
 * This module contains various dice rolling methods
 */

const _ = require('lodash');
const debug = require('debug')('dnd-tools:lib:dice-roller');

function dicePermutations(dice_count, num_sides, drop_strategy, drop_count) {

}

/**
 * Drops some of the provided rolls based on the given strategy and count
 * @param  {Array<Integer>} rolls         
 * @param  {String} drop_strategy The rule for dropping rolls, one of 'high', 'low', 'none'
 * @param  {Integer} drop_count   The number of rolls to drop, must be non-negative and less than the roll count
 * @return {Array<Integer>}       The given rolls with the appropriate ones dropped
 */
function dropRolls(rolls, drop_strategy, drop_count) {
  
  drop_count = _.max([ _.min([rolls.length - 1, drop_count]), 0 ]);

  if( drop_strategy == 'high' ) {
    let desc_rolls = rolls.sort((a, b) => { return b-a });
    return desc_rolls.slice(drop_count, rolls.length);
  } else if( drop_strategy == 'low' ) {
    let desc_rolls = rolls.sort((a, b) => { return b-a });
    return desc_rolls.slice(0, rolls.length - drop_count);
  }

  return rolls;
}

module.exports = {
  dicePermutations,
  dropRolls
}