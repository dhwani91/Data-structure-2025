//The Challenge:
// Given an array of unsorted numbers, find the length of the smallest subarray that when sorted will sort the whole array.

// const arr =[1,3,2,0,-1,7,10]

// subArrayMin = -1
// subArrayMax=3



function findMinWindow (arr:number[]){

    let left:number =0, right:number= arr.length-1;
    while(arr[left] < arr[left+1] && left < arr.length-1){
    left++;
    // array is already sorted
    if(left === arr.length-1){
        return 0
    }
    }
    while(arr[right]> arr[right-1] && right > 0){
        right--;

    }
    const subArr = arr.slice(left, right+1);
    const subArrMin=Math.min(...subArr);
    const subArrMax=Math.max(...subArr);
    // extend the  window to the left to include the elements that are greater than the subArrMin
    if(arr[left-1] > subArrMin && left > 0){
        left--;
    }
// extend the window to the right if elements are less than subMax
    if(arr[right+1]< subArrMax && right< arr.length-1){
        right++;
    }

return right-left+1
}
console.log(findMinWindow([1,3,2,0,-1,7,10]));//5
console.log(findMinWindow([1,2,5,7,3,10,11,12])) //3
console.log(findMinWindow([1,2,5]));//0
console.log(findMinWindow([7,8,1,2,0,10,11]));//0