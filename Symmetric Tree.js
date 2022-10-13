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
 * @return {boolean}
 */
const isSymmetric = function(root) {
    return compareTree(root.left, root.right)
};

function compareTree(root, sibling) {
    if(!root || !sibling) return root === sibling;

    if(root.val !== sibling.val) return false;
    else {
        return compareTree(root.left, sibling.right) && compareTree(root.right, sibling.left)
    }
}