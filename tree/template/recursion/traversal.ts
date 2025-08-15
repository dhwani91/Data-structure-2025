
//Template: Traversal (DFS — Preorder/Inorder/Postorder)

/*
*       1
       / \
      2   3
     / \
    4   5

Preorder: Visit → Left → Right
Step 1: Visit(1)
Step 2: Visit(2)
Step 3: Visit(4)
Step 4: Visit(5)
Step 5: Visit(3)

*
*💡 Example:
Preorder: res.push(node.val); dfs(node.left); dfs(node.right)

Inorder: dfs(node.left); res.push(node.val); dfs(node.right)

Postorder: dfs(node.left); dfs(node.right); res.push(node.val)
* */


// | Problem                                                                                    | Description                |
// | ------------------------------------------------------------------------------------------ | -------------------------- |
// | [94. Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)      | Return inorder traversal   |
// | [144. Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)   | Return preorder traversal  |
// | [145. Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Return postorder traversal |


import TreeNode from "../treeNode";
function dfs<T>(node: TreeNode<T> | null): void {
    if (!node) return;

    // Preorder: process before recursion
    // e.g., result.push(node.val);

    dfs(node.left);   // Inorder: process between
    // e.g., result.push(node.val);

    dfs(node.right);  // Postorder: process after both

    // e.g., result.push(node.val); ← Postorder
}


