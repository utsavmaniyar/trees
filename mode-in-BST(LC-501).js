/*
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:
Input: root = [1,null,2,2]
Output: [2]

Example 2:
Input: root = [0]
Output: [0] 
==========================================================
Approach: In this problem we have to find a nodes where values are repeating. So to keep the track of the count of accurance and the node value we have used the Map().
Once traversal is done, we are looping throgh eachEntry in Map and finding the mode.
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
var findMode = function (root) {
    let tempMap = new Map();
    helper(root, tempMap);
    let maxCount = 0;
    result = [];
    tempMap.forEach((v, k) => {
        if (v > maxCount) {
            result = [k];
            maxCount = v;
        } else if (v === maxCount) {
            result.push(k)
        }
    });

    return result;
};

const helper = (node, tempMap) => {

    if (tempMap.get(node.val)) {
        tempMap.set(node.val, tempMap.get(node.val) + 1)
    } else {
        tempMap.set(node.val, 1)
    }


    if (!node.left && !node.right) {
        return;
    }

    if (node.left) helper(node.left, tempMap)

    if (node.right) helper(node.right, tempMap)
}