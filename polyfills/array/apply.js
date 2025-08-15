Function.prototype.myApply = function(context = {}, args=[]) {
    if(typeof this !== "function") {
        throw new Error("Function.prototype.myApply must be a function");
    }
    if(!Array.isArray(args)) {
        throw new Error("Array.prototype.myApply must be a array");
    }
    context.fn = this;
    context.fn(...args);
    console.log( context.fn(...args));
}

const car = {
    name: 'tesla',
    color: 'blue',
    // carBuy: function (price) {
    //     return `${this.name} ${this.color} for ${price} ${range}`;
    // }
}

const carBuy = function(price, range) {
    return `${this.name} ${this.color} for ${price} at ${range}`;
}

// console.log("original",carBuy.apply(car, [10,'200']));
carBuy.myApply(car, [10,'200'])