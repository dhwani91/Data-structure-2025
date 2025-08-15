class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    prev:ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

 class DoublyList<T> {
     head:ListNode<T> | null;
     constructor(){
         this.head = null;
     }
     size() {
         let count =0;
         let curr = this.head;
         while(curr){
             curr = curr.next;
             count++;
         }
         return count;
     }
     addFirst(value: T): void {
         let node = new ListNode(value);
         node.next = this.head;
         if(this.head){
             this.head.prev = node;
         }
         this.head = node;
     }

     addLast(value: T): void {
         let node = new ListNode(value);
         if(!this.head){
             this.head = node
             return;
         }
         let curr = this.head;
         while(curr.next){
             curr = curr.next;
         }
         node.prev = curr;
         curr.next = node;

     }

     addAt(value: T, index: number): void {
         const listSize = this.size();
         if (index < 0 || index > listSize) {
             console.error('Index out of range');
             return;
         }

         if (index === 0) {
             this.addFirst(value);
             return;
         }

         const newNode = new ListNode(value);
         let curr = this.head;
         for (let i = 0; i < index - 1; i++) {
             curr = curr!.next;
         }

         newNode.next = curr!.next;
         newNode.prev = curr;

         if (curr!.next) {
             curr!.next.prev = newNode;
         }

         curr!.next = newNode;
     }


     removeFirst(): void {
         if(!this.head) return
         this.head = this.head.next;
         if(this.head){
             this.head.prev = null;
         }
     }

     removeLast(): void {
         if(!this.head) return
         if(!this.head.next){
             this.head = null
             return;
         }
         let curr = this.head;
         while(curr.next.next){
             curr = curr.next;
         }
         curr.next = null;

     }

     removeAt(index: number): void {
         if (index < 0 || index > this.size()) {
             console.error('Index out of range');
         }
         if (index === 0) {
             this.head = this.head.next;
         }
         if (this.head) {
             this.head.prev = null;
         }

         let curr = this.head;
         for (let i = 0; i < index - 1; i++) {
             curr = curr.next;
         }
         if (curr.next) {
             curr.next = curr.next.next;
             if (curr.next) {
                 curr.next.prev = curr
             }
         }

     }
     print(){
         let curr = this.head;
         while(curr){
             console.log(curr.value);
             curr = curr.next;
         }
     }
 }

 const dll = new DoublyList();
dll.addFirst(2);
dll.addFirst(6);
dll.addFirst(5);
dll.addLast(3);
dll.removeFirst();
dll.addAt(8,3);
console.log(dll.size());