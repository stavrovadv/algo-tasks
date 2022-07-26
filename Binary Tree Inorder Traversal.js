/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const res = [];

    const helper = (root) => {
        if(root === null) return;

        helper(root.left);
        res.push(root.val);
        helper(root.right);
    };

    helper(root, res);

    return res;
};

//O(n), где n кол-во узлов, и память и сложность