function isDisarium(number) {
      const numStr = number.toString();
    
    let sum = 0;
    
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        const position = i + 1;
        sum += Math.pow(digit, position);
    }
    
    return sum === number;
}

module.exports = isDisarium;
