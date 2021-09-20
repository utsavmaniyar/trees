/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

            1               1
          /   \           /   \
         2     3         2     3
Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
=========================================================
Approach:
We have two tree to compare, so while travesing we can check the value for each node and return false if value is not same.
we are going level by level so this will use two queue to hold the child nodes.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        return true
    }else if((!p && q) || (p && !q)){return false};
    let firstQueue = [p];    
    let secondQueue = [q];
    while(firstQueue.length > 0 || secondQueue.length > 0){
        if(firstQueue.length !== secondQueue.length){
            return false;
        }
          let n = firstQueue.length;
            for(i=0; i<n; i++){
                const pNode = firstQueue.shift();
                const qNode = secondQueue.shift();
                if(pNode.val !== qNode.val) return false;
                if(pNode.left && qNode.left){
                    firstQueue.push(pNode.left);
                    secondQueue.push(qNode.left);
                } else if((pNode.left && !qNode.left) || (!pNode.left && qNode.left)){
                    return false
                }
                if(pNode.right && qNode.right){
                    firstQueue.push(pNode.right);
                    secondQueue.push(qNode.right);
                } else if((pNode.right && !qNode.right) || (!pNode.right && qNode.right)){
                    return false
                }
            }
          }
    return true;
};