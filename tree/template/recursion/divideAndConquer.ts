/*
* Use when you combine left and right subtree results.
*🔁 Signature:
function helper(node: TreeNode | null): ReturnType
*
* 🧠 Base Case:
if (node === null) return baseValue;
*
* 🧩 Start:
1.Recurse on left & right
2.Combine their result
3.Return result to parent
*
*
*
* */
import TreeNode from "../treeNode";

function dfs<T>(node: TreeNode<T> | null): number {
    if (!node) return 0; // base case

    const left = dfs(node.left);
    const right = dfs(node.right);

    // Combine results, e.g., max height
    return 1 + Math.max(left, right);
}


// 📌 Used in:
//
// Max Depth
//
// Balanced Tree
//
// Diameter of Binary Tree





