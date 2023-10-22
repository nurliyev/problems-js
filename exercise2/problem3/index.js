function numbersSum(num) {
  // Your code
  let sum = 0;

  for (i = 0; i < num.length; i++) {
    let sumarray = num[i];
    if (typeof sumarray === "number") {
      sum += sumarray;
    }
  }
  return sum;
}
console.log(numbersSum([1, 2, "13", "4", "645"])); // 3

console.log(numbersSum([true, false, "123", "75"])); // 0

console.log(numbersSum([1, 2, 3, 4, 5, true])); // 15

export default numbersSum;
