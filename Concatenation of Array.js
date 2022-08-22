/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
    return [...nums, ...nums];
};

console.log(getConcatenation([1,2,1]))
//O(2n)-> O(n), где n = nums.length