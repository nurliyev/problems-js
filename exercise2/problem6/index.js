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

module.exports = mapping;

console.log(mapping(["p", "s"])); // { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"])); // { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }

//Write a function that creates an object with each (key, value)
//pair being the (lower case, upper case) versions of a letter, respectively.
