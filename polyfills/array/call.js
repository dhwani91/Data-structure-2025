
Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error("Not function!");
    }
// create a fn function inside the context which is object and assign our carBuy callback to object's fn method.
    context.fn = this;
    console.log("$$this", this)
    // call method with args
    context.fn(...args);
    console.log("$$call",  context.fn(...args))
}

const car = {
    name: 'tesla',
    color: 'blue',
    carBuy: function (price) {
        return `${this.name} ${this.color} for ${price}`;
    }
}

const carBuy = function(price) {
    return `${this.name} ${this.color} for ${price}`;
}

console.log(carBuy.myCall(car, 10000));
// console.log(car.carBuy(10000));

