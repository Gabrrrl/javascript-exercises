const sumAll = function (a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR'
    } else if (isNaN(a) || isNaN(b) || typeof (a) !== 'number' || typeof (b) !== 'number') {
        return 'ERROR'
    } else {
        const high = Math.max(a, b);
        const low = Math.min(a, b);
        return high * (high + 1) / 2 - (low - 1) * (low) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
