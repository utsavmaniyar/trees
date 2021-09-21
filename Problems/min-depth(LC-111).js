/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.


            3
          /  \
        9     20
             /   \
           15     7
 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
===============================================================

Approach: we will traverse tree in level order and check if node has left or right child node or not.
If we find any node with NO child nodes then that is a leaf node and return the level count.
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
var minDepth = function (root) {
    if (!root) return 0;
    let queue = [root];
    let count = 0;
    while (queue.length > 0) {
        count++;
        const n = queue.length;
        for (i = 0; i < n; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) {
                return count;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return count;
};