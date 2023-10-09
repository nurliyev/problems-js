<<<<<<< HEAD
function removeABC(str) {
    const modifiedStr = str.replace(/[abc]/gi, '');
    if (modifiedStr === str) {
        return null;
    }

    return modifiedStr;
}

console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"

console.log(removeABC("hello world!")) // null

console.log(removeABC("")) // null

=======
function removeABC() {
  // Your code
}

>>>>>>> e01a8548da4a563405f868996ccfc1543e34a915
module.exports = removeABC;
