/* Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

 

Example 1:
Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:
Input: root = [1], target = 4.428571
Output: 1
=======================
Approach: first we will compare the node value with the target value.
then if node is GT target then we will continue with left path otherwise right path.
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    let tempMap = new Map();
    helper(root, tempMap, target)
    const mapSort = new Map([...tempMap.entries()].sort((a, b) => a[1] - b[1]));
    return mapSort.keys().next().value;
};

const helper = (node, tempMap, target) => {

    if (!node) {
        return
    }
    if (node.val > target) {
        tempMap.set(node.val, node.val - target)
        helper(node.left, tempMap, target)
    }
    else if (node.val < target) {
        tempMap.set(node.val, target - node.val)
        helper(node.right, tempMap, target)
    } else {
        tempMap.set(node.val, 0)
    }
}