/*Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

            3
          /  \
        9     20
             /   \
           15     7

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]


Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
==========================================================
Approach:
We will use BFS and capture the each node on a given level in an tempArray.
After every level, we will toggle the zigzac flag and reverse the tempArray before pushing it to final result.
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
var zigzagLevelOrder = function (root) {
    if (!root) { return [] }
    let result = [];
    let queue = [root];
    let isReverse = false;
    while (queue.length > 0) {
        const n = queue.length;
        let tempArray = [];
        for (i = 0; i < n; i++) {
            const node = queue.shift();
            tempArray.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (isReverse) {
            result.push(tempArray.reverse())
            isReverse = false;
        } else {
            result.push(tempArray);
            isReverse = true;

        }
    }
    return result;
};