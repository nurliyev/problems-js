function longestTime(h, m, s) {

    const hours = h * 3600;
    const minutes = m * 60;
    const seconds = s;

    const maxDuration = Math.max(hours, minutes, seconds);

    if (maxDuration === hours) {
        return h;
    } else if (maxDuration === minutes) {
        return m;
    } else {
        return s;
    }
}

console.log(longestTime(1, 59, 3598)) // 1

console.log(longestTime(2, 300, 15000)) // 300

console.log(longestTime(15, 955, 59400)) // 59400

module.exports = longestTime;
