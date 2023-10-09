function isPrimitive() {
<<<<<<< HEAD
    return value !== null && value !== "";
}

console.log(isPrimitive(function add(x, y) {
	return x + y
})) // true

console.log(isPrimitive(new RegExp('^[a-zA-Z0-9]+$', 'g'))) // true

console.log(isPrimitive(null)) // false

console.log(isPrimitive("")) // false

=======
  // Your code
}

>>>>>>> e01a8548da4a563405f868996ccfc1543e34a915
module.exports = isPrimitive;
