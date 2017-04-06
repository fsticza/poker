const _ = require('lodash')

function listOfAKind (from, count) {
  return _(from)
    .filter(function (perValue) {
      return _.size(perValue) === count
    })
    .value()
}

function areAllUniq (values) {
  return _(values).uniq().size() === _.size(values)
}

class Hand {
  constructor (hand, CARD_COUNT) {
    this.CARD_COUNT = CARD_COUNT
    this.handByValue = _.groupBy(hand, 'value')
    this.handBySuit = _.groupBy(hand, 'suit')
    this.cards = hand
    this.pairs = listOfAKind(this.handByValue, 2)
    this.values = _.map(hand, 'value')
    this.highCard = _.max(this.values)
    this.lowCard = _.min(this.values)
  }

  hasStraight () {
    return areAllUniq(this.values) && (this.highCard - this.lowCard === this.CARD_COUNT - 1)
  }
  hasFlush () {
    return !_.isEmpty(listOfAKind(this.handBySuit, this.CARD_COUNT))
  }
  hasFullHouse () {
    return this.hasThreeOfAKind() && this.hasAPair()
  }
  hasFourOfAKind () {
    return !_.isEmpty(listOfAKind(this.handByValue, 4))
  }
  hasThreeOfAKind () {
    return !_.isEmpty(listOfAKind(this.handByValue, 3))
  }
  hasTwoPairs () {
    return _.size(this.pairs) > 1
  }
  hasAPair () {
    return _.size(this.pairs) === 1
  }
}

module.exports = Hand
