/*Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
================================================
Approach:
this is a BFS problem, we will first capture the node on each level in tempArray and after level is complete, we will push this to the result array.
The result will contain the node values from root to leaf order in each level from left to right. To print this in bottom to top manner, we will simply reverse the result array.
 
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        const n = queue.length;
        let tempArray = []
        for (i = 0; i < n; i++) {
            const node = queue.shift();
            tempArray.push(node.val);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(tempArray)
    }
    return result.reverse();
};