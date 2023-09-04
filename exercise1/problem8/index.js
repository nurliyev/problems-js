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

module.exports = longestTime;
