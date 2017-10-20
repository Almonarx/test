const getRandom = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = getRandom;