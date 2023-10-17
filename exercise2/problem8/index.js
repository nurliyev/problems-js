function isEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = isEqual;

console.log(
  isEqual(
    {
      name: "Benny",
      phone: "3325558745",
      email: "benny@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // false

console.log(
  isEqual(
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // true

// Create a function that checks to see if two object arguments are equal to one another.
// Return `true` if the objects are equal, otherwise, return `false`.
