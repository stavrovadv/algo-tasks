/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const res = [];
    for(let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i];
        res.push(sum)
    }
    return res;
};

console.log(runningSum([1, 1, 1, 1, 1]))
// O(n)