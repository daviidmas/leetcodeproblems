/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i, j]
            }
        }
    }
};

nums = [3,3], target = 6
let res = twoSum(nums,target)
console.log(res)