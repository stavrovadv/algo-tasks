/**
 * @param {string} s
 * @return {string}
 */
// const toLowerCase = function(s) {
//     return s.toLowerCase();
// };

const toLowerCase = function (s) {
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    const startUpperInd = 'A'.charCodeAt(0),
        endUpperInd = 'Z'.charCodeAt(0);

    let resArr = [];

    for(let i = 0; i < s.length; i++) {
        const currentCharCode = s[i].charCodeAt(0);
        if(currentCharCode >= startUpperInd && currentCharCode <= endUpperInd) {
            resArr.push(String.fromCharCode(currentCharCode + diff));
        } else {
            resArr.push(s[i]);
        }
    }

    return resArr.join('');
};
//  O(n), где n - кол-во символов в строке