function makeTitleCase(str) {
  let array1 = str.split(" ");
  let words = [];

  for (let x = 0; x < array1.length; x++) {
    words.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return words.join(" ");
}

console.log(makeTitleCase("This is a title")); // "This Is A Title"

console.log(makeTitleCase("capitalize every word")); // "Capitalize Every Word"

console.log(makeTitleCase("I Like Pizza")); // "I Like Pizza"

console.log(makeTitleCase("PIZZA PIZZA PIZZA")); // "PIZZA PIZZA PIZZA"

export default makeTitleCase;
