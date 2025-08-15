//Array.map(callback);
//callback(element, index,array)
//return A new array with each element being the result of the callback function.

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result
}

const arr =[1,2,3,4];

const res = arr.myMap((ele) => ele * 2);
console.log(res);

