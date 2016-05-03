'use strict';

const _ = require('lodash');
const cards = require('./cards');

let cardCount = 5;

function listOfAKind(from, count) {
  return _(from)
    .filter(function(perValue) {
      return _.size(perValue) === count;
    })
    .value();
};
function createHand() {
  return _(cards.availableCards)
    .sampleSize(cardCount)
    .sortBy('value')
    .value();
};
function areAllUniq(values) {
  return _(values).uniq().size() === _.size(values);
}

class Hand {
  constructor(hand) {
    this.handByValue = _.groupBy(hand, 'value');
    this.handBySuit = _.groupBy(hand, 'suit');
    this.cards = hand;
    this.pairs = listOfAKind(this.handByValue, 2);
    this.values = _.map(hand, 'value');
    this.highCard = _.max(this.values);
    this.lowCard = _.min(this.values);
  }

  hasStraight () {
    return areAllUniq(this.values) && (this.highCard - this.lowCard === cardCount - 1);
  }
  hasFlush() {
    return !_.isEmpty(listOfAKind(this.handBySuit, cardCount));
  }
  hasFullHouse() {
    return this.hasThreeOfAKind() && this.hasAPair();
  }
  hasFourOfAKind() {
    return !_.isEmpty(listOfAKind(this.handByValue, 4));
  }
  hasThreeOfAKind() {
    return !_.isEmpty(listOfAKind(this.handByValue, 3));
  }
  hasTwoPairs() {
    return _.size(this.pairs) > 1;
  }
  hasAPair() {
    return _.size(this.pairs) === 1;
  }
}

module.exports = {
  newHand: function(hand) {
    hand = hand || createHand();
    return new Hand(hand);
  },
  cardCount: cardCount
};
