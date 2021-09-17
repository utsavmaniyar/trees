/*
PROBLEM STATEMENT
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
            10
          /   \
        5      -3
      /  \       \
    3     2       11
  /  \     \
3    -2     1   

Example 1:


Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
==========================================================================================================

Approch:
We have to visit each node and it's children and capture the sum in an Array(sumHolder). But since sum is for the path and not needed to be a node and leaf node, we have to also capture the total from the sub node.
This is do able while applying DFS in pre-order manner. Once we update the sumHoder we can now check each element with targetSum. If condition is true then we will increase the count for the path match.
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    let sumHolder = [];
    let count = {val: 0};
    helper(root, targetSum, sumHolder, count);
    return count.val;
};

const helper = (node, targetSum, sumHolder, count) => {
    sumHolder = sumHolder.map(s => s+node.val);
    sumHolder.push(node.val);
    sumHolder.forEach(s => {
        if(s === targetSum){
            count.val = count.val + 1;
        }
    })
    if(!node.left && !node.right){
        return;
    }
    
    if(node.left){
        helper(node.left, targetSum, sumHolder, count)
    }
    
    if(node.right){
        helper(node.right, targetSum, sumHolder, count)
    }
    
}