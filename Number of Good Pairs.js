/**
 * @param {number[]} nums
 * @return {number}
 */
// const numIdenticalPairs = function(nums) {
//     let countGoodPair = 0;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] === nums[j]) countGoodPair++;
//         }
//     }
//
//     return countGoodPair;
// };
// сложность O(nums.length^2)

const numIdenticalPairs = (nums) => {
    const mapNums = new Map();
    let countGoodPair = 0;

    for(let num of nums) {
        if(mapNums.has(num)) {
            countGoodPair+=mapNums.get(num);
            mapNums.set(num, mapNums.get(num) + 1);
        } else {
            mapNums.set(num, 1);
        }
    }

    return countGoodPair;
}
// сложность O(nums)

console.log(numIdenticalPairs([1,2,3,1,1,3]))