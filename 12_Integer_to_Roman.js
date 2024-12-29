/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numString = num.toString()
    let res
    console.log(numString[0])
    if(numString[0]==4) {
        res = "IV"
    } else if (numString[0]==9) {
        res = "IX"
    }
};

console.log(intToRoman(3749))