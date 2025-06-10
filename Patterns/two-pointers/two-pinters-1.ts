//The Challenge:
// Given an array of sorted numbers and a target sum,
// find a pair in the array whose sum is equal to the given target.
// [1,2,3,4,5] , target sum = 7

const findPair = (arr:number[], target:number) => {
    let left:number = 0, right:number = arr.length-1,pairSum:number =0,pair:any[] = null;

    // get the element at each pointer and add to pairSum;
    // if pairSum < target sum, increment leftPointer
    //if pairSum > target, decrement leftPointer
    while(left !== right){
        pairSum = arr[left]+ arr[right];
        if(pairSum === target){
            pair = [arr[left], arr[right]];
            break;
        }else if(pairSum < target){
            left++

        }else if(pairSum > target){
            right--;
        }

    }
    return pair;
}
console.log(findPair([1,2,3,4,5], 7));
console.log(findPair([1,6,8,9,5,10], 14));