function box(n){
    let resArr = [],
        matrix = [];
    for(let i = 0; i < n; i++) {
        matrix[i] = [];
        for(let j = 0; j < n; j++) {
            if(i === 0 || i === n-1) {
                matrix[i][j] = '-';
            } else if (j === 0 || j === n-1){
                matrix[i][j] = '-';
            } else {
                matrix[i][j] = ' ';
            }
        }
    }

    for(let row of matrix) {
        resArr.push(row.join(''));
    }

    return resArr;
}

function boxWithRepeat(n) {
    const firstAndLastRow = ('-').repeat(n),
        otherRow = `-${(' '.repeat(n-2))}-`;
    let res = [];

    res.push(firstAndLastRow);
    for(let i = 1; i < n-1; i++) {
        res.push(otherRow)
    }
    res.push(firstAndLastRow);

    return res;
}

console.log(box(5))