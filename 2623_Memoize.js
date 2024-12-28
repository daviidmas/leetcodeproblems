/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    cache = {}
    return function(...args) {
        console.log(cache)
        if(args in cache) {
            return cache[args]
        } else {
            let result = fn(...args)
            cache[args] = result
            return result
        }
    }
}

 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
 