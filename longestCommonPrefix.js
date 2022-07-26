/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = '';

    for(let i = 0; i < strs.length; i++) {
        const word = strs[i];

        if(i === 0) {
            prefix = word;
            continue;
        }

        if(!word.startsWith(prefix)){
            const minLength = Math.min(word.length, prefix.length)
            prefix  = prefix.slice(0, minLength)
            for(let j = 0; j < minLength; j++){
                if(word[j] !== prefix[j]) {
                    prefix  = prefix.slice(0, j)
                }
            }
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["c","acc","ccc"]));

// Сложность O(k), где K-количество символов во всех словах в сумме