/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function(i) {
        let counter = n;
        n++;
        
        return counter;

    };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

 