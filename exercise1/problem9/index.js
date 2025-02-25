function isDisarium(number) {
  const numStr = number.toString();

  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    const position = i + 1;
    sum += Math.pow(digit, position);
  }

  return sum === number;
}

console.log(isDisarium(75)); // false
// 7^1 + 5^2 = 7 + 25 = 32

console.log(isDisarium(135)); // true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

console.log(isDisarium(544)); // false

console.log(isDisarium(518)); // true

console.log(isDisarium(8)); // true

console.log(isDisarium(466)); // false

export default isDisarium;
