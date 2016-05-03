'use strict';

const expect = require('chai').expect;
const _ = require('lodash');
const poker = require('../lib/poker');
const cards = require('../lib/cards');

function createHand(source) {
  return _(source)
    .map(function(card) {
      return new cards.Card(card.value, card.suit);
    })
    .sortBy('value')
    .value();
};

describe('Poker', function() {

  it('should find pairs', function() {
      let source = [
        {value: 1, suit: 'c'},
        {value: 1, suit: 'd'},
        {value: 2, suit: 'c'},
        {value: 3, suit: 'd'},
        {value: 4, suit: 'c'}
      ];
      let hand = poker.newHand(source);
      expect(hand.hasAPair()).to.equal(true);
  });

  it('should find both pairs', function() {
    let source = [
      {value: 1, suit: 'c'},
      {value: 1, suit: 'd'},
      {value: 2, suit: 'h'},
      {value: 4, suit: 'd'},
      {value: 4, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasTwoPairs()).to.equal(true);
  });

  it('should find three of a kind', function() {
    let source = [
      {value: 1, suit: 'c'},
      {value: 1, suit: 'd'},
      {value: 1, suit: 'h'},
      {value: 3, suit: 'd'},
      {value: 4, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasThreeOfAKind()).to.equal(true);
  });

  it('should match flush if all suits are the same', function() {
    let source = [
      {value: 1, suit: 'c'},
      {value: 5, suit: 'c'},
      {value: 9, suit: 'c'},
      {value: 7, suit: 'c'},
      {value: 3, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasFlush()).to.equal(true);
  });

  it('should find three of a kind plus a pair - full house', function() {
    let source = [
      {value: 1, suit: 'c'},
      {value: 1, suit: 'd'},
      {value: 1, suit: 'h'},
      {value: 3, suit: 'd'},
      {value: 3, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasFullHouse()).to.equal(true);
  });

  it('should find four of a kind', function() {
    let source = [
      {value: 1, suit: 'c'},
      {value: 1, suit: 'd'},
      {value: 1, suit: 'h'},
      {value: 1, suit: 's'},
      {value: 4, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasFourOfAKind()).to.equal(true);
  });

  it('should not match straight for non incr. values', function() {
    let source = [
      {value: 4, suit: 'c'},
      {value: 5, suit: 'd'},
      {value: 3, suit: 'h'},
      {value: 7, suit: 's'},
      {value: 2, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasStraight()).to.equal(false);
  });

  it('should match straight for non incr. values', function() {
    let source = [
      {value: 4, suit: 'c'},
      {value: 5, suit: 'd'},
      {value: 3, suit: 'h'},
      {value: 6, suit: 's'},
      {value: 2, suit: 'c'}
    ];
    let hand = poker.newHand(source);
    expect(hand.hasStraight()).to.equal(true);
  });

});
