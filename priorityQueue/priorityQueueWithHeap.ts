class minHeap<T> {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(i: number): number {
        return Math.floor((i-1)/2);

    }
    private getLeftChildIndex(i: number): number {
        return  i*2 + 1;
    }
    private getRightChildIndex(i: number): number {
        return  i*2 + 2;
    }

    private hasParent(i:number):boolean {
        return this.getParentIndex(i) >= 0
    }

    private hasLeftChild(i: number): boolean {
        return this.getLeftChildIndex(i) < this.heap.length;
    }

    private hasRightChild(i: number): boolean {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    private swap(indexOne: number, indexTwo: number): void {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
    }

    // Returns the number of elements in the heap
    public size(): number {
        return this.heap.length;
    }

    // Peeks at the minimum element (root)
    public peek(): number | null {
        if (this.heap.length === 0)  {
            return null;
        }
        return this.heap[0];
    }

    // Inserts a new element into the heap
    public insert(value: number): void {
        this.heap.push(value); // Add to the end
        this.heapifyUp();
    }// Restore heap property by bubbling up

    public remove(): number {
        if(this.heap.length === 0)  {
            return null
        }
        if (this.size() === 1) {
            return this.heap.pop()!;
        }
        const item = this.heap[0]; // Get the root
        this.heap[0] = this.heap.pop()!; // Move last element to root
        this.heapifyDown();          // Restore heap property by bubbling down
        return item;

    }


    private heapifyUp():void {
        let currentIndex = this.heap.length - 1; // Start from the last element
        while(this.hasParent(currentIndex) && this.getParentIndex(currentIndex) > this.heap[currentIndex]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }

    }

    private heapifyDown():void {
        let currentIndex = 0;
        while(this.hasLeftChild(currentIndex)){
            let smallerIndex = this.getLeftChildIndex(currentIndex);
            if(this.hasRightChild(smallerIndex) && this.getRightChildIndex(currentIndex) < this.getLeftChildIndex(currentIndex)) {
                smallerIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.heap[currentIndex] <= this.heap[smallerIndex]){
                break;
            }else {
                this.swap(currentIndex, smallerIndex);
            }
            currentIndex = smallerIndex;
        }

    }
}

// Create a new MinHeap instance
const minHeap = new MinHeap();

console.log("Is heap empty?", minHeap.isEmpty()); // true

// Insert elements
minHeap.insert(10);
console.log("After inserting 10:", minHeap.getHeapArray()); // [10]

minHeap.insert(4);
console.log("After inserting 4:", minHeap.getHeapArray());  // [4, 10]

minHeap.insert(15);
console.log("After inserting 15:", minHeap.getHeapArray()); // [4, 10, 15]

minHeap.insert(20);
console.log("After inserting 20:", minHeap.getHeapArray()); // [4, 10, 15, 20]

minHeap.insert(3);
console.log("After inserting 3:", minHeap.getHeapArray());  // [3, 4, 15, 20, 10]

console.log("Min element (peek):", minHeap.peek()); // 3
console.log("Heap size:", minHeap.size());         // 5

// Extract minimum elements
let extracted = minHeap.extractMin();
console.log("Extracted min:", extracted);              // 3
console.log("Heap after extractMin:", minHeap.getHeapArray()); // [4, 10, 15, 20] (incorrect, should be [4, 7, 15, 20, 10] if following dry run exactly after the next step)

minHeap.insert(7);
console.log("After inserting 7:", minHeap.getHeapArray()); // [4, 7, 15, 20, 10] (following the dry run)

extracted = minHeap.extractMin();
console.log("Extracted min:", extracted);              // 4
console.log("Heap after extractMin:", minHeap.getHeapArray()); // [7, 10, 15, 20]

console.log("Min element (peek):", minHeap.peek()); // 7
console.log("Heap size:", minHeap.size());         // 3