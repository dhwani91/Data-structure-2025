class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
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

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);

node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);


console.log("iterative",preOrderIterative(node));

console.log("recursive",preOrderRecursive(node));
