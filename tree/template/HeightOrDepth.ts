// Max Depth

import TreeNode from "./treeNode";

function maxDepthRecursive<T>(root: TreeNode<T> | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}

function maxDepthIterative<T>(root: TreeNode<T> | null) {
    if (!root) return 0;
    let queue: Array<{node: TreeNode<T>,depth: number}> = [{node:root, depth: 1}];
    let maxDepth:number = 0;
    while (queue.length) {
        let {node,depth} = queue.shift()!;
        maxDepth = Math.max(maxDepth, depth);
        if(node.left){
            queue.push({node:node.left,depth:depth + 1 });
        }
        if(node.right){
            queue.push({node:node.right,depth:depth + 1 });
        }
    }
    return maxDepth;
}

function minDepthIterative<T>(root: TreeNode<T> | null) {
    if (!root) return 0;
    const queue:Array<{node: TreeNode<T>, depth:number}> = [{node:root, depth:1}];
    while(queue.length){
        let {node,depth} = queue.shift()!;
        if (!node.left && !node.right) {
            return depth; // first leaf node encountered
        }
        if(node.left){
            queue.push({node:node.left,depth:depth + 1});
        }
        if(node.right){
            queue.push({node:node.right,depth:depth + 1});
        }
    }

}

function minDepthRecursive<T>(root: TreeNode<T> | null) {
    if (!root) return 0;
    // only one child exists
    if(!root.left){
        return 1 + minDepthRecursive(root.right);
    }
    if(!root.right){
        return 1 + minDepthRecursive(root.left);
    }
    // Both children exist
    return 1 + Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right));

 }
// empty tree
const rootNull = new TreeNode(null);
console.log("null tree", maxDepthRecursive(rootNull))
console.log("null tree- minDepthRecursive", minDepthRecursive(rootNull));
// single node
const rootSingle = new TreeNode(1);
console.log("single root  tree", maxDepthRecursive(rootSingle));
console.log("single root  tree- maxDepthIterative", maxDepthIterative(rootSingle));
console.log("single root- minDepthRecursive", minDepthRecursive(rootSingle));

// balanced tree

const rootBalance = new TreeNode(1);
rootBalance.left = new TreeNode(2);
rootBalance.right = new TreeNode(3);
rootBalance.left.left = new TreeNode(4);
rootBalance.left.right = new TreeNode(5);
rootBalance.right.left = new TreeNode(6);
rootBalance.right.right = new TreeNode(7);
console.log("balanced  tree", maxDepthRecursive(rootBalance))
console.log("balanced  tree- maxDepthIterative", maxDepthIterative(rootBalance));
console.log("balanced  tree- minDepthRecursive", minDepthRecursive(rootBalance));
// Unbalanced tree
const rootUnbalanced = new TreeNode(1);
rootUnbalanced.left = new TreeNode(2);
rootUnbalanced.right = new TreeNode(3);
rootUnbalanced.left.left = new TreeNode(null);
rootUnbalanced.left.right = new TreeNode(4);
rootUnbalanced.right.left = new TreeNode(null);
rootUnbalanced.right.right = new TreeNode(7);
rootUnbalanced.right.right.right = new TreeNode(8);
rootUnbalanced.right.right.right.right = new TreeNode(9);
console.log("Unbalanced  tree", maxDepthRecursive(rootUnbalanced));
console.log("Unbalanced  tree- maxDepthIterative", maxDepthIterative(rootUnbalanced));
console.log("unbalanced  tree- minDepthRecursive", minDepthRecursive(rootUnbalanced));

//Deep tree with varying structure







