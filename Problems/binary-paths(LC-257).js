/*Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

        1
      /   \
    2      3
     \
      5
Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
===============================================
Approach: We will apply DFS here and traverse from root to leaf node.
while traversing we will construct the path in a string format by adding -> after a node if node is not a leaf node.

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];
    helper(root, result, '');
    return result
};

const helper = (node, result, tempStringPath) => {
    tempStringPath += node.val.toString();
    if (!node.left && !node.right) {
        result.push(tempStringPath);
        return;
    }
    tempStringPath += '->';
    if (node.left) helper(node.left, result, tempStringPath)
    if (node.right) helper(node.right, result, tempStringPath)

}