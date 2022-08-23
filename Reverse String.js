/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// const reverseString = function(s) {
//     s.reverse();
// };

const reverseString = function(s) {
    for(let i = 0, j = s.length-1; i < j; i++, j--){
        let a = s[i];
        s[i] = s[j];
        s[j] = a;
    }
};

s = ["h","e","l","l","o"]
reverseString(s)
console.log(s)

