/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arr2 = [], i = 0;
    arr.forEach(element => {
        arr2[i] = fn(element, i)
        i++
    });
    return arr2
};

arr = [10,20,30], fn = function constant() { return 42; }
console.log(map(arr,fn))