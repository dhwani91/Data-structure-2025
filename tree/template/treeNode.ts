export default class TreeNode<T> {
    val:T;
    left: TreeNode <T> | null;
    right: TreeNode <T>| null;

    constructor(val:T, left: TreeNode<T> | null = null, right: TreeNode<T> | null= null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
