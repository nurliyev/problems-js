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

export default sortIt;
