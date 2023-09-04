function removeABC(str) {
    const modifiedStr = str.replace(/[abc]/gi, '');
    if (modifiedStr === str) {
        return null;
    }

    return modifiedStr;
}
module.exports = removeABC;
