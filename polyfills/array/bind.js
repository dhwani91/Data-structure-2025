//bind(thisArg)
// bind(thisArg, arg1)
// bind(thisArg, arg1, arg2)
// bind(thisArg, arg1, arg2, /* …, */ argN)

// returns A copy of the given function with the specified this value, and initial arguments

Function.prototype.myBind = function(context ={}, ...args) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.myApply must be a function");
    }
    context.fn = this;
    return function (...newArgs) {
       return context.fn(...args, ...newArgs);
    }
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
// const purchase = carBuy.bind(car, 1000)
// console.log(purchase)
// const purchase1 = carBuy.bind(car)
// console.log(purchase1("10000"))

const purchase2 = carBuy.myBind(car, '11111')
console.log(purchase2())
const purchase3 = carBuy.myBind(car)
console.log(purchase3("10000"))