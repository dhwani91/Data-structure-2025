class Stack<T>{
    private items:T[] = [];

    push(element:T):void{
        this.items.push(element);
    }
    pop():void{
        this.items.pop();
    }
    peek():T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty():boolean{
        return this.items.length === 0;
    }
    size():number{
        return this.items.length;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Output: 2
console.log(numberStack); // Output: 2

// const stringStack = new Stack<string>();
// stringStack.push("hello");
// stringStack.push("world");
// console.log(stringStack.peek()); // Output: world