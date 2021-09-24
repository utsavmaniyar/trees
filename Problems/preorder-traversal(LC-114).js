/* Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Example 4:
Input: root = [1,2]
Output: [1,2]

Example 5:
Input: root = [1,null,2]
Output: [1,2]
===============================================
Approach: we will use DFS and collect the node value while traversing through the node. 
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
var preorderTraversal = function (root) {
    let result = []
    if (!root) return result;
    dfs(root, result)
    return result;
};

const dfs = (node, result) => {
    if (!node.left && !node.right) {
        result.push(node.val);
        return;
    }

    result.push(node.val)
    if (node.left) {
        dfs(node.left, result)
    }

    if (node.right) {
        dfs(node.right, result)
    }
}