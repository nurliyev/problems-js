function mapping(letters) {
  {
    const result = {};

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      result[letter] = letter.toUpperCase();
    }

    return result;
  }
}

console.log(mapping(["p", "s"])); // { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"])); // { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }

export default mapping;
