/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let indexZero = null;

    for(let i = 0, j = 0; i < nums.length && j < nums.length;) {
        if(indexZero === null) {
            if (nums[j] === 0) indexZero = j;
            else j++;
        }
        else {
            if(nums[i] !== 0 && i > j) {
                nums[indexZero] = nums[i];
                nums[i] = 0;
                indexZero = null;
            }
            i++;
        }
    }
};

const moveZeroesShift = (nums) => {
    let insertInd = 0;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
          nums[insertInd] = nums[i];
          insertInd++;
      }
    }

    for(;insertInd < nums.length; insertInd++) {
        nums[insertInd] = 0;
    }
};

let arr = [0,1,0,3,12];
moveZeroesShift(arr);
console.log(arr)