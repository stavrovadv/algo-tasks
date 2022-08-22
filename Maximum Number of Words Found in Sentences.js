/**
 * @param {string[]} sentences
 * @return {number}
 */
// const mostWordsFound = function(sentences) {
//     let maxCountRow = 0;
//     for(let row of sentences) {
//         const countWords = row.split(' ').length;
//         if(maxCountRow < countWords) maxCountRow = countWords;
//     }
//     return maxCountRow;
// };

// в условии уточнено, что пробелы только между словами (нет в начале и конце строки)
const mostWordsFound = function(sentences) {
    let maxCountRow = 0;
    for(let row of sentences) {
        let separator = 0;
        for(let i = 0; i < row.length; i++) {
            if(row[i] === ' ') separator++;
        }

        const countWords = separator + 1;
        if(maxCountRow < countWords) maxCountRow = countWords;
    }
    return maxCountRow;
};

// O(n), где n - кол-во символов во всех предложениях

console.log(mostWordsFound( ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))