function pentagonal(num) {
  let sum = 1;
  sum += 5 * (num - 1);
  for (let i = 3; i <= num; i++) {
    sum += 5 * (i - 2);
  }
  return sum;
}

console.log(pentagonal(1)); // 1

console.log(pentagonal(2)); // 6

console.log(pentagonal(3)); // 16

console.log(pentagonal(8)); // 141

export default pentagonal;
