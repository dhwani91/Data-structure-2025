// Array.reduce(callback, initialValue)
// callback(accumulator, currentValue, index, arr)
// return accumultor

// if user does not provide initial value  it will take first element as initial value
Array.prototype.myReduce = function(callback, initialValue) {

    let accumulator = initialValue;
    for (let j = 0; j < this.length; j++) {
        accumulator = accumulator ? callback(accumulator, this[j], j,this) : this[j];
    }
    return accumulator;
}

const arr = [1,2,3,4,5];
const sum = arr.myReduce((acc, curr, index, nums) => {
    return acc + curr;
}, 0)

console.log(sum);