/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function(nums, diff) {
    let counterTriplets = 0;

    for (let currInd = 0; currInd < nums.length-1; currInd++) {
        const num1 = nums[currInd] + diff,
            num2 = nums[currInd] + (2 * diff);
        let num1IsFound = false,
            num2IsFound = false;

        for(let i = currInd + 1; (!num1IsFound || !num2IsFound) && i < nums.length; i++) {
            if(!num1IsFound && nums[i] === num1) num1IsFound = true;
            else if (!num2IsFound && nums[i] === num2) num2IsFound = true;
        }

        if(num1IsFound && num2IsFound) counterTriplets++;
    }

    return counterTriplets;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3))
console.log(arithmeticTriplets([4,5,6,7,8,9], 2))