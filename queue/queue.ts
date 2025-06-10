class Queue<T>{
    private items: T[] = [];

    enqueue(item:T):void  {
        this.items.push(item);
    }

    dequeue(item: T | undefined ) {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0]
    }
    isEmpty():boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }
}
const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

console.log(numberQueue.dequeue()); // Output: 1
console.log(numberQueue.peek());    // Output: 2
console.log(numberQueue.length);   // Output: 2

const stringQueue = new Queue<string>();
stringQueue.enqueue("apple");
stringQueue.enqueue("banana");

console.log(stringQueue.dequeue()); // Output: "apple"
console.log(stringQueue.isEmpty()); // Output: false