/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const getInteger = (s) => {
        switch (s) {
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
        }
    };

    const romanArray = s.split(''),
        digitArray = [];

    for(let i = 0, counter = 1; i < romanArray.length; i++){
        if(romanArray[i] === romanArray[i+1]){
            counter++;
        } else {
            digitArray.push(getInteger(romanArray[i]) * counter);
            counter = 1;
        }

        if(i+1 === romanArray.length-1) {
            digitArray.push(getInteger(romanArray[i+1]) * counter);
            break;
        }
    }

    let res = 0;
    for(let i = 0; i < digitArray.length; i++) {
        if(digitArray[i+1] > digitArray[i]) {
            res -= digitArray[i];
        } else {
            res += digitArray[i];
        }

        if(i+1 === digitArray.length-1) {
            res += digitArray[i+1];
            break;
        }
    }
    return res;
};

console.log(romanToInt("LVIII"));