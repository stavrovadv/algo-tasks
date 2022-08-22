/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let max = 0;
    for(let i = 0; i < accounts.length; i++) {
        const clientAccounts = accounts[i];
        let clientSum = 0;
        for(let j = 0; j < clientAccounts.length; j++) {
            clientSum += clientAccounts[j];
        }

        if(clientSum > max) max = clientSum;
    }

    return max;
};

//O(mn)