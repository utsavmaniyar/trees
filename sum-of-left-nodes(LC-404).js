/* 
Given the root of a binary tree, return the sum of all left leaves.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
=========================================================
Approach: since we need the total of left leaf nodes, we will check if any node has left child and that child is the leaf node.
if we find a match then we will add that node val in total. 
*/


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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;
    const result = { total: 0 };
    helper(root, result);
    return result.total;
};

const helper = (node, result) => {
    if (!node.left & !node.right) {
        return;
    }

    if (node.left) {
        if (!node.left.left && !node.left.right) {
            result.total += node.left.val;
        }
        helper(node.left, result);
    }

    if (node.right) {
        helper(node.right, result)
    }
}