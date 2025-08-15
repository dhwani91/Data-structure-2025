//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

const arr =[1,2,4,7,5]

Array.prototype.myAt = function (index) {

    if(index < -this.length || index >= this.length) {
        return undefined
    }
    if(index >= 0){
        return this[index];
    }else if(index <0){
        return this[this.length + index];
    }

}

console.log(arr.myAt(0));
console.log(arr.myAt(1));
console.log(arr.myAt(-1))
console.log(arr.myAt(-10))