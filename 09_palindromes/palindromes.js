const palindromes = function (word) {
    regExpr = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(regExpr, '');
    for (let i = 0; i < (word.length / 2); i++) {
        if (word[i] !== word[word.length -1 - i]) {
            return false
        }
    }
        return true
};

// Do not edit below this line
module.exports = palindromes;
