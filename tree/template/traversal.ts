import TreeNode from "./treeNode";


// class TreeNode<T> {
//     val: T;
//     left: TreeNode<T> | null;
//     right: TreeNode<T> | null;
//
//     constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }
// self, left, right
function preOrderIterative<T>(root: TreeNode<T> | null): void {
    if (!root) return;

    const stack: TreeNode<T>[] = [];
    stack.push(root);

    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        console.log(currentNode.val);

        // Push right first so that left is processed first (LIFO)
        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }
}

function preOrderRecursive<T>(root: TreeNode<T> | null): void {
    if (!root) return;
    console.log(root.val);
    preOrderRecursive(root.left);
    preOrderRecursive(root.right);
}

// left, right, self
function postOrderIterative<T>(root: TreeNode<T> | null): void {
    if (!root) return;

    const stack: TreeNode<T>[] = [];
    stack.push(root);

    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        console.log(currentNode.val);

        // Push right first so that left is processed first (LIFO)
        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }
}

function postOrderRecursive<T>(root: TreeNode<T> | null): void {
    if(!root) return;
    postOrderRecursive(root.left);
    postOrderRecursive(root.right);
    console.log(root.val)
}

// left, self, right

function inOrderRecursive<T>(root: TreeNode<T> | null): void {
    if (!root) return;
    inOrderRecursive(root.left);
    console.log(root.val);
    inOrderRecursive(root.right);
}

function inOrderIterative<T>(root: TreeNode<T> | null): void {
    if (!root) return;
    let stack: TreeNode<T> [] = [root];
    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        if(currentNode.right) {
            stack.push(currentNode.right);
        }
        console.log(currentNode.val);
        if (currentNode.left) {
            stack.push(currentNode.left);
        }

    }
}

//Level Order Traversal (BFS)

function levelOrderIterative<T>(root: TreeNode<T> | null): T[][] {
    if (!root) return;
    const result: T[][] = [];
    let queue: TreeNode<T>[]=[root]
    while (queue.length > 0) {
        const level: T[] = [];
        const currentNode = queue.shift()!;
        let currentLevelSize = queue.length;
        for (let i = 0; i < currentLevelSize; i++) {
            level.push(currentNode.val)

            if(currentNode.right) {
                queue.push(currentNode.right);
            }
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
        }
        result.push(level);

    }

    return result;
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);

node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);


console.log("PreOrder-iterative",preOrderIterative(node));
console.log("preOrder-recursive",preOrderRecursive(node));


console.log("postOrder - iterative",postOrderIterative(node));
console.log("postOrder - recursive",postOrderRecursive(node));

console.log("inOrder - iterative",inOrderIterative(node));
console.log("inOrder - recursive",inOrderRecursive(node));