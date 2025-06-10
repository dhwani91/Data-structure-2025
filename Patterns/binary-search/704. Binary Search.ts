//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//
// You must write an algorithm with O(log n) runtime complexity.

//Example 1:
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1



function binarySearch (array:number[], target:number):number {
    let left:number = 0, right:number = array.length -1 ;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if(target === array[mid]) {
            return mid
        }else if (target < array[mid]){
            right= mid - 1
        }else{
            left= mid+1
        }

    }
    return -1
}


function binarySearchHelper(array: number[], target: number, left: number, right: number){
    if(left > right){
        return false;
    }
    let mid = left + (right - left) / 2
    if(target === array[mid]){
        return mid;
    }else if (target < array[mid]){
        return   binarySearchHelper(array, target, left, mid-1)

    }else{
        return binarySearchHelper(array, target, mid+1, right)
    }

}

function binarySearchRec(array:number[], target:number):void{
     binarySearchHelper(array, target, 0 , array.length-1)
}



console.log(binarySearch([2,7,8,10,13,15,19,21],7));
// console.log(binarySearch([2,7,8,10,13,15,19,21],15));
// console.log(binarySearch([0,1,2,4],15));
// console.log(binarySearchRec([0,1,2,4,6,7,9],7));
// console.log(binarySearchRec([0,1,2,4,6,7,9],6));