/* global describe, it */
const expect = require('chai').expect
const utils = require('../lib/utils')

const source = [
  {value: 4, suit: 'c'},
  {value: 5, suit: 'd'},
  {value: 3, suit: 'h'},
  {value: 6, suit: 's'},
  {value: 2, suit: 'c'}
]

describe('Utils', () => {
  describe('shuffle', () => {
    const shuffled = utils.shuffle(source)
    it('should not return items in same sequence', () => {
      expect(shuffled).not.to.deep.equal(source)
    })
  })
})
