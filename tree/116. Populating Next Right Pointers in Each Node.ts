class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null ;
    next: TreeNode<T> | null ;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    ConnectLevelSiblings(){
        const queue =[root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            let prevNode = null;
            for(let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift();

                if(prevNode){
                    prevNode.next = currentNode;
                }
                prevNode = currentNode;
                if(currentNode.left){
                    queue.push(currentNode.left);
                }
                if(currentNode.right){
                    queue.push(currentNode.right);
                }
            }

        }

    }
}

const root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);