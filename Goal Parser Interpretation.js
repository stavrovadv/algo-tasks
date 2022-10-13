/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
    const res = [];

    for(let i = 0; i < command.length;) {
        let subst = '';
        if(command[i] === '(') {
            if(command[i+1] === ')') {
                subst = 'o';
                i+=2;
            } else if(command.substr(i, 4) === '(al)') {
                subst = 'al';
                i+=4;
            }
        } else {
            subst = 'G';
            i++;
        }

        res.push(subst);
    }

    return res.join('');
};

console.log(interpret("G()()()()(al)"));