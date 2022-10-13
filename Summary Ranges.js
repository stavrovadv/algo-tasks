/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const res = [];
    let fromChar = nums[0],
        prevChar = nums[0];

    for(let i = 1; i <= nums.length; i++) {
        if(prevChar === nums[i]) continue;

        if(prevChar + 1 !== nums[i]){
            if(prevChar === fromChar) {
                res.push(String(prevChar));
            } else {
                res.push(`${fromChar}->${prevChar}`)
            }
            fromChar = nums[i];
        }

        prevChar = nums[i];
    }

    return res;
};

console.log(summaryRanges([0,1,2,4,5,7]))