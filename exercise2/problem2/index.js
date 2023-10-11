function sortIt(num) {
  return num.sort((a, b) => {
    const valA = Array.isArray(a) ? a[0] : a;
    const valB = Array.isArray(b) ? b[0] : b;
    return valA - valB;
  });
}

// Test cases
console.log(sortIt([4, 1, 3])); // [1, 3, 4]
console.log(sortIt([[4], [1], [3]])); // [[1], [3], [4]]
console.log(sortIt([4, [1], 3])); // [[1], 3, 4]

module.exports = sortIt;

// Create a function that, given an array where elements of the array are either an integer or
// an array containing a single integer, sorts the array according to the "content of the elements".

// console.log(sortIt([4, 1, 3])) // [1, 3, 4]

// console.log(sortIt([[4], [1], [3]])) // [[1], [3], [4]]

// console.log(sortIt([4, [1], 3])) // [[1], 3, 4]

// console.log(sortIt([[4], 1, [3]])) // [1, [3], [4]]

// console.log(sortIt([[3], 4, [2], [5], 1, 6])) // [1, [2], [3], 4, [5], 6]
