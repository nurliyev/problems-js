<<<<<<< HEAD
function longestTime(h, m, s) {

    const hours = h * 3600;
    const minutes = m * 60;
    const seconds = s;

    return hours > minutes && hours > seconds ? h : minutes > hours && minutes > seconds ? m : s; 

}

console.log(longestTime(1, 59, 3598)) // 1

console.log(longestTime(2, 300, 15000)) // 300

console.log(longestTime(15, 955, 59400)) // 59400

=======
function longestTime() {
  // Your code
}

>>>>>>> e01a8548da4a563405f868996ccfc1543e34a915
module.exports = longestTime;
