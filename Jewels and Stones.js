/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    const map = new Map();
    for(let i = 0; i < jewels.length; i++) {
        const key = jewels[i];
        map.set(key, 0)
    }

    for(let i = 0; i < stones.length; i++) {
        const alph = stones[i];

        if(map.has(alph)) {
            map.set(alph, map.get(alph)+1);
        }
    }

    let jewelsCount = 0;
    for(let val of map.values()) {
        jewelsCount+=val;
    }
    return jewelsCount;
};

const numJewelsInStonesWithRegex = function(jewels, stones) {
    const jewelsArr = jewels.split(''),
        jewelsWithSeparators = jewelsArr.join('|'),
        regExp = RegExp(jewelsWithSeparators, 'g');
    return Array.from(stones.matchAll(regExp), m => m[0]).length;
};

console.log(numJewelsInStones("zZ","ZZ"))

