const _ = require('lodash')
let values = _.range(1, 14)
let suits = ['c', 'd', 'h', 's']

class Card {
  constructor (value, suit) {
    this.value = value
    this.suit = suit
  }
}

let cards = _(values)
  .map(function (value) {
    return suits.map(function (suit) {
      return new Card(value, suit)
    })
  })
  .flatten()
  .value()

module.exports = {
  availableCards: cards,
  Card: Card
}
