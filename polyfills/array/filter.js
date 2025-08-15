// Array.filter (callback)
// callback(element, index, arr)
//A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.


Array.prototype.myFilter = function(callback)  {
    const result=[];
    for (let i = 0; i < this.length; i++) {

        if(callback(this[i], i, this) ){
            result.push(this[i]);
        }
    }
    return result
};

const arr =[1,2,3,4];

const even  =(ele) => ele % 2 === 0

const res = [].myFilter(even);
console.log(res);
