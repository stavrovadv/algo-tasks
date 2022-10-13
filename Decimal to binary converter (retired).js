function decToBin(d) {
    let res = [];
    do{
        res.push(d & 1);
        d = d >> 1
        console.log('d', d)
    } while (d > 0);
    return res.reverse().join('');
}

//Сложность log2 (d)

decToBin(0)
decToBin(1)
decToBin(2)
decToBin(3)
decToBin(21)
decToBin(31)