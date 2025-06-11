class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head:ListNode<T> | null;
    constructor(){
        this.head = null;
    }
    append(value:T){
        const newNode = new ListNode(value);

        if(!this.head){
            this.head = newNode
            return;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;

    }


    // append at beginning
   prepend(value:T){
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
   }

   delete(target:T){
        if(this.head.value === target){ this.head = this.head.next}
        let prevNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === target){
                prevNode.next = currentNode.next
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

   }

   find(value:T): ListNode<T> | null {
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null

   }

   print():void {
      if(this.head === null) return;
       while(this.head !== null){
            console.log("$$head", this.head.value)
           console.log("$$head", this.head)
            this.head = this.head.next;
       }
   }

   reverse():ListNode<T> | null {
        if(this.head === null) return;
        let currentNode = this.head;
        let prevNode = null;
        while(currentNode !== null){
            let tempNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNode
     }
     return prevNode;
   }
}

const linkList = new LinkedList<string>();
linkList.append('a');
linkList.append('b');
linkList.append('c');
linkList.append('d');
linkList.find('c')
// linkList.delete('c');
// linkList.delete('a');

linkList.print()
console.log("$$linkList",linkList)

linkList.reverse()
console.log("$$linkList-reverse",linkList)
