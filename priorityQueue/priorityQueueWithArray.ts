type Item<T> ={value: T, priority:number};

class MinPriorityQueue<T> {
    private queue: Item<T>[] = [];

    enqueue(value: T, priority: number): void {
        // let i = 0;
        // const item = {value, priority};
        // while (i < this.queue.length && this.queue[i].priority <= priority) i++;
        // this.queue.splice(i, 0, item);
        this.queue.push({ value, priority });
        // keep it sorted descending by priority (smaller number = higher priority? flip compare accordingly)
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue(): T | undefined {
        return this.queue.shift()?.value;
    }

    peek(): T | undefined {
        return this.queue.length > 0 ? this.queue[0].value : null;
    }

    size(): number {
        return this.queue.length;
    }
}


    const pq = new MinPriorityQueue<string>();
    pq.enqueue("A", 2);
    pq.enqueue("B", 1);
    pq.enqueue("C", 3);
    pq.enqueue("D", 1);
    pq.enqueue("E", 2);
    pq.enqueue("E", 2);
// Internal order (min first, stable for ties):
// [ (B,1), (D,1), (A,2), (E,2), (C,3) ]

    console.log(pq.dequeue()); // B
    console.log(pq.dequeue()); // D
    console.log(pq.dequeue()); // A
    console.log(pq.dequeue()); // E
    console.log(pq.dequeue()); // E
console.log(pq.dequeue()); // C

