class TreeNode <T> {
    val:T;
    left:TreeNode<T> | null = null;
    right:TreeNode<T> | null = null;

    constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    levelOrderTraversal (root:T):T[]{
        const result =[];
        const queue = [];
        queue.push(root);
        while (queue.length > 0) {
            const levelSize = queue.length;
            const currentLevel =[];
            for(let i=0; i<levelSize; ++i) {
                const currentNode = queue.shift();
                currentLevel.push(currentNode.val);
                if(currentNode.left){
                    queue.push(currentNode.left);
                }
                if(currentNode.right){
                    queue.push(currentNode.right);
                }
            }
            result.push(currentLevel);
            // capture the levelsize queue.length
            // intialize current level subarray
            // loop through level size and add children to queue

        }
        return result;
    }

}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(root.levelOrderTraversal(root))