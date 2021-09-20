/*
PROBLEM STATEMENT
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:

        1
          \
           2
          /
        3   

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
==========================================================================

Approach: This is a tree traversal and we have to display node values inorder. We will use recursive function.
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) { return [] }
    let results = [];
    dfs(root, results);
    return results
};

const dfs = (node, results) => {

    if (!node.left && !node.right) {
        results.push(node.val)
        return
    }

    if (node.left) { dfs(node.left, results) }
    results.push(node.val)
    if (node.right) { dfs(node.right, results) }
}