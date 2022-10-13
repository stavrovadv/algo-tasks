function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        const foundNum = target - numbers[i];
        for(let j = 0; j < numbers.length; j++) {
            if(foundNum === numbers[j] && i !== j) return [i, j]
        }
    }
} // O(n^2)

function twoSumMap(numbers, target) {
    let map = new Map();

    for(let i = 0; i < numbers.length; i++) {
        const foundNum = target - numbers[i];
        if(map.has(foundNum)) {
            return [i, map.get(foundNum)]
        } else {
            map.set(numbers[i], i)
        }
    }
} // O(n)?

console.log(twoSumMap([1,2,3], 4))