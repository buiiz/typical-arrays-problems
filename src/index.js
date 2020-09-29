exports.min = function min(arr) {
    if (!arr || !arr.length) return 0;
    return arr.sort((a, b) => a - b)[0];
};

exports.max = function max(arr) {
    if (!arr || !arr.length) return 0;
    return arr.sort((a, b) => b - a)[0];
};

exports.avg = function avg(arr) {
    if (!arr || !arr.length) return 0;
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
};
