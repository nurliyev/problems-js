function numOfDigits(int) {
  const numStr = Math.abs(int).toString();
  return numStr.length;
}

console.log(numOfDigits(1000)); // 4

console.log(numOfDigits(12)); // 2

console.log(numOfDigits(1305981031)); // 10

console.log(numOfDigits(0)); // 1

export default numOfDigits;
