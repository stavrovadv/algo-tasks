/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function(num) {
    const thousand = Math.trunc(num / 1000),
        hundr = Math.trunc(num % 1000 / 100),
        tens = Math.trunc(num % 1000 % 100 / 10),
        units = num % 1000 % 100 % 10;

    const sortedNumArr = [thousand, hundr, tens, units].sort((a, b) => a-b);

    let first = (sortedNumArr[0] * 10 + sortedNumArr[2]),
        second = (sortedNumArr[1] * 10 + sortedNumArr[3]);
    return first + second;
};

console.log(minimumSum(2932))
// O(nlogn), т.к. sortedNumArr через быструю сортировку