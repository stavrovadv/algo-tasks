/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const defaultStr = s.replace(/[^\w]|_/g, "").toLowerCase();
    const reversedStr = defaultStr.split('').reverse().join('');
    return defaultStr === reversedStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))