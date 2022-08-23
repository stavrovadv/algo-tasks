/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const res = [];
    for(let i = 0; i <= n; i++) {
        let binary = i.toString(2),
            counter = 0;

        for(let k of binary){
            if(k === '1') counter++;
        }
        res.push(counter);
    }
    return res;
};