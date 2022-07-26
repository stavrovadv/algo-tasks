const romanToInt = function(num) {
    const getRoman = (num) => {
        switch(num) {
            case 1: return 'I';
            case 5: return 'V';
            case 10: return 'X';
            case 50: return 'L';
            case 100: return 'C';
            case 500: return 'D';
            case 1000: return 'M';
            default: return null;
        }
    };
    const getRes = (n) => {
        const units = Math.trunc(num / n);
        if(units < 4) res += getRoman(n).repeat(units);
        else if(units === 4) {
            res += getRoman(n) + getRoman((units + 1) * n)
        } else if(units < 9) {
            res += getRoman(5 * n) + getRoman(n).repeat(units-5)
        } else if (units === 9) {
            res += getRoman(n) + getRoman(n * 10)
        } else if(units === 10) {
            res += getRoman(n * 10);
        }
    };

    let res = '';

    if(num > 1000) {
        getRes(1000)
        num = num % 1000;
    }

    if(num > 100) {
        getRes(100);
        num = num % 100;
    }

    if(num > 10) {
        getRes(10);
        num = num % 10;
    }

    getRes(1);

    return res;
};

console.log(romanToInt(1));
console.log(romanToInt(2));
console.log(romanToInt(3));
console.log(romanToInt(4));
console.log(romanToInt(5));
console.log(romanToInt(6));
console.log(romanToInt(7));
console.log(romanToInt(8));
console.log(romanToInt(9));
console.log(romanToInt(10));
console.log(romanToInt(58))
console.log(romanToInt(1994))