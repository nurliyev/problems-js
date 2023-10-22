function insertWhitespace(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

console.log(insertWhitespace("SheWalksToTheBeach")); // "She Walks To The Beach"

console.log(insertWhitespace("MarvinTalksTooMuch")); // "Marvin Talks Too Much"

console.log(insertWhitespace("TheGreatestUpsetInHistory")); // "The Greatest Upset In History"

export default insertWhitespace;
