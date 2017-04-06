const cards = require('./cards')
const Hand = require('./hand')
const utils = require('./utils')
const CARD_COUNT = 5

function createHand () {
  return utils
    .shuffle(cards.availableCards)
    .slice(0, CARD_COUNT)
    .sort((a, b) => a.value - b.value)
}

module.exports = {
  newHand: function (hand) {
    hand = hand || createHand()
    return new Hand(hand, CARD_COUNT)
  }
}
