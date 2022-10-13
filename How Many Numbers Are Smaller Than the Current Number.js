/**
 * @param {number[]} nums
 * @return {number[]}
 */
// n^2
// const smallerNumbersThanCurrent = function(nums) {
//     const res = [];
//
//     for(let currNumb of nums) {
//         let counter = 0;
//         for(let n of nums) {
//             if(currNumb > n) counter++;
//         }
//         res.push(counter)
//     }
//
//     return res;
// };

// n log n
const smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a-b);
    const res = [],
        map = new Map();

    let counter = 0;
    map.set(sorted[0], counter);

    for(let ind = 1; ind < sorted.length; ind++) {
        const currEl = sorted[ind];
        if(currEl !== sorted[ind-1]) {
            counter = ind;
            map.set(currEl, counter);
        }
    }

    for(const el of nums) {
        const countSmaller = map.get(el);
        res.push(countSmaller)
    }

    return res;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))