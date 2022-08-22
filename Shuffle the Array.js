/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    const res = [];
    for(let i = 0, j = n; j < nums.length; i++, j++) {
        res.push(nums[i], nums[j]);
    }
    return res;
};

console.log(shuffle([2,5,1,3,4,7], 3))

// Cложность O(nums.length)->O(n)