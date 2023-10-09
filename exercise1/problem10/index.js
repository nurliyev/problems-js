<<<<<<< HEAD
function move(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if the character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            // Shift the letter to the next one
            char = String.fromCharCode(char.charCodeAt(0) + 1);

            // Handle 'z' by wrapping around to 'a'
            if (char > 'z') {
                char = 'a';
            }
        } else if (char >= 'A' && char <= 'Z') {
            // Check if the character is an uppercase letter
            // Shift the letter to the next one
            char = String.fromCharCode(char.charCodeAt(0) + 1);

            // Handle 'Z' by wrapping around to 'A'
            if (char > 'Z') {
                char = 'A';
            }
        }

        // Append the modified character to the result
        result += char;
    }

    return result;
}

console.log(move("hello")) // "ifmmp"

console.log(move("bye")) // "czf"

console.log(move("welcome")) // "xfmdpnf"

=======
function move() {
  // Your code
}

>>>>>>> e01a8548da4a563405f868996ccfc1543e34a915
module.exports = move;
