/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let nlength = nums.length
    let k = 0
    for(let i=0;i<nlength;i++){
        if(nums[i]==val) {
            for(let j=i;j<nums.length;j++){
                nums[j] = nums[j+1]
            }
            k++
            i--
        }
    }
    return nlength-k
};

nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))