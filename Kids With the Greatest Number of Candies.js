/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for(let candy of candies) {
        if(max < candy) max = candy;
    }

    return candies.map((candy) => candy + extraCandies >= max);
};

//O(n) сложность и память, где n - количество детей