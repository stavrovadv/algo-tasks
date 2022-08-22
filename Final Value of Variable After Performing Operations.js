/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
    let X = 0;
    for (let i = 0; i < operations.length; i++) {
        if(operations[i].includes('+')){
            X++;
        } else if(operations[i].includes('-')) {
            X--;
        }
    }
    return X;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))
//O(n*m), где n = operations.length, а m = 3 символам в строке -> O(3n)->O(n)