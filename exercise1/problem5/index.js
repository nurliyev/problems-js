function removeABC(str) {
  const modifiedStr = str.replace(/[abc]/gi, "");
  if (modifiedStr === str) {
    return null;
  }

  return modifiedStr;
}

console.log(removeABC("This might be a bit hard")); // "This might e  it hrd"

console.log(removeABC("hello world!")); // null

console.log(removeABC("")); // null

export default removeABC;
