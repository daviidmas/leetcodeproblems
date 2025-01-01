/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res
    for(let i=0;i<nums.length;i++){
        let repeated = false
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]==nums[j]) {
                repeated = true
            }
        }
        for(let j=i-1;j>=0;j--) {
            if(nums[i]==nums[j]) {
                repeated = true
            }
        } 
        if(!repeated) {
            res = nums[i]
        } 
    }
    return res
};

nums = [1]
console.log(singleNumber(nums))