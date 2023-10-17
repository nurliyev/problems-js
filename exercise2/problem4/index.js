function numInStr(arr) {
  // Your code
  return arr.filter((str) => /\d/.test(str));
}

console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]

module.exports = numInStr;

// Create a function that takes an array of strings and returns an array with only the strings
// that have numbers in them. If there are no strings containing numbers, return an empty array.
