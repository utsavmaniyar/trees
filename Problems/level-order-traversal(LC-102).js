/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
            3
         /    \
        9     20
            /    \
           15     7
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

=======================================================================================================
Approach:
This is a level order traversal problem, and we have to print the each level in an array. So we will use queue to store the sub-node and push node value in tempArray.
Once the level is travese completly, we will push tempArray in result Array.


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
var levelOrder = function(root) {
    if(!root) return[];
    let queue = [root];
    let result = [];
    
    while(queue.length > 0){
        let tempArray = [];
        let n = queue.length;
        for(i=0; i<n ; i++){
            const node = queue.shift();
            tempArray.push(node.val);
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(tempArray);
    }
    
    return result;
}; 
