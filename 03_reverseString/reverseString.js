const reverseString = function(string) {
    let takeApartIntoArray = string.split('');
    let reverseArray = takeApartIntoArray.reverse();
    let joinTheArray = reverseArray.join('')
    return joinTheArray
};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
