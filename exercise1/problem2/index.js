function intWithinBounds() {
  return Number.isInteger(n) && n >= lower && n < upper;
}

module.exports = intWithinBounds;
