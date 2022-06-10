const fibonacci = function(fibonacciIndex) {
    if (fibonacciIndex < 0) {
        return 'OOPS'
    }
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 1; i <= fibonacciIndex; i++) {
        sequence = firstNum + secondNum;
        firstNum = secondNum
        secondNum = sequence
    }
    return firstNum
};

// Do not edit below this line
module.exports = fibonacci;
