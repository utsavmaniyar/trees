/* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
======================================================================================================
Approach: we have to traverse each node and add the node value in lessThan and GreatherThan Array to check all child nodes.
while visiting child node we have to compare the value with lt and gt array and mark isBST variable to false.

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) {
        return false
    }
    let result = { isBST: true }
    helper(root, result, [], []);
    return result.isBST;
};

const helper = (node, result, lt, gt) => {
    lt.some(val => {
        if (val <= node.val) {
            result.isBST = false;
            return
        }
    })

    gt.some(val => {
        if (val >= node.val) {
            result.isBST = false;
            return
        }
    })

    if (!node.left && !node.right) {
        return
    }

    lt.push(node.val)
    if (node.left) {
        if (node.val <= node.left.val) {
            result.isBST = false
        }
        helper(node.left, result, lt, gt)
    }
    lt.pop()
    gt.push(node.val)
    if (node.right) {
        helper(node.right, result, lt, gt)
    }
    gt.pop()
}