/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = [['(', ')'], ['[', ']'], ['{', '}']];
    let stack = [];

    if(s.length % 2 !== 0) return false;

    for(let i = 0; i < s.length; i++) {
        for(let [left, right] of pairs) {
            if(s[i] === left) stack.push(s[i]);
            else if(s[i] === right && stack.pop() !== left) return false;
        }
    }

    return (stack.length === 0);
};

console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))