/**
 * @param {string} s
 * @return {string}
 */
// const reverseWords = function(s) {
//     return s.split(' ').map((word) => {
//         return word.split('').reverse().join('');
//     }).join(' ');
// };

const reverseWords = function (s) {
    let wordArr = [],
        resArr = [];

    function reverseWord() {
        for(let j = wordArr.length-1; j >= 0; j--) {
            resArr.push(wordArr[j]);
        }
        wordArr = [];
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            wordArr.push(s[i]);
        } else {
            reverseWord();
            resArr.push(' ');
        }
    }

    if(wordArr.length > 0) {
        reverseWord();
    }

   return resArr.join();
};

console.log(reverseWords("Let's take LeetCode contest"))
//O(n)