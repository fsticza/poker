const utils = {
  shuffle (arr) {
    return [...arr].sort(() => { return 0.5 - Math.random() })
  }
}

module.exports = utils
