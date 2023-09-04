function insertWhitespace(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

module.exports = insertWhitespace;
