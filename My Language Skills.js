// function myLanguages(results) {
//     let res = [];
//     const sortedValues = Object.values(results).filter(val => val >= 60).sort((a, b) => b-a);
//     for(let sortedVal of sortedValues) {
//         for(let [key, val] of Object.entries(results)) {
//             if(val === sortedVal) {
//                 res.push(key);
//                 break;
//             }
//         }
//     }
//     return res;
// }

function myLanguages(results) {
    return Object.entries(results)
        .filter(([key, val]) => val >= 60)
        .sort(([key1, val1], [key2, val2]) => val2 - val1)
        .map(([key, val]) => key);
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}));