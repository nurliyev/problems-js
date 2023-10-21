function duplicateNums(nums) {
  // Your code
  const numCount = {};
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const arrayofnumbers = nums[i];
    numCount[arrayofnumbers] = (numCount[arrayofnumbers] || 0) + 1;

    if (numCount[arrayofnumbers] === 2) {
      duplicates.push(arrayofnumbers);
    }
  }
  return duplicates.sort((a, b) => a - b);
}

module.exports = duplicateNums;

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])); // [3]

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])); // [72, 81, 99]

console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // []
