function numInStr(arr) {
  // Your code
  return arr.filter((str) => /\d/.test(str));
}

console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]

export default numInStr;
