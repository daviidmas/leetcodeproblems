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
var postorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) {
            return;
        }
        
        // First traverse left subtree
        traverse(node.left);
        
        // Then traverse right subtree
        traverse(node.right);
        
        // Finally add the root value
        result.push(node.val);
    }
    
    traverse(root);
    return result;
};

// Constructing the tree [1,null,2,3]
let node3 = new TreeNode(3);
let node2 = new TreeNode(2, node3, null);
let root = new TreeNode(1, null, node2);

console.log(postorderTraversal(root)); // [3,2,1]