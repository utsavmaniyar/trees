/*
PROBLEM STATEMENT
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
          5
        /   \
       4     8
      /     / \
    11    13   4
   /  \         \
  7    2         1
Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false

Example 3:
Input: root = [1,2], targetSum = 0
Output: false
 
Constraints:
The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
=============================================================================================================

Approch:
Since we are going from roo to leaf node, DFS will be efficient here. Also we have a targetSum to match we need sumHolder to hold the sum from each recursion.
We will use DFS in pre-order manner.
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false
    }
    let result = { val: false };
    helper(root, 0, targetSum, result);
    return result.val
};

const helper = (node, sumHolder, targetSum, result) => {

    if (!node.left && !node.right) {
        if (targetSum === sumHolder + node.val) {
            result.val = true
        }
        return
    }

    sumHolder = sumHolder + node.val;
    if (node.left) { helper(node.left, sumHolder, targetSum, result) }
    if (node.right) { helper(node.right, sumHolder, targetSum, result) }

}