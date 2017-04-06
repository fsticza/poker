const poker = require('./lib/poker')
const hand = poker.newHand()

console.log('Hand:')
console.log(hand.cards)

switch (true) {
  case hand.hasStraight():
    console.log('has straight')
    break
  case hand.hasFourOfAKind():
    console.log('has four of a kind')
    break
  case hand.hasFullHouse():
    console.log('has fullHouse')
    break
  case hand.hasFlush():
    console.log('has flush')
    break
  case hand.hasThreeOfAKind():
    console.log('has three of a kind')
    break
  case hand.hasTwoPairs():
    console.log('has 2 pairs')
    break
  case hand.hasAPair():
    console.log('has a pair')
    break
  default:
    console.log('has high card', hand.highCard)
}
