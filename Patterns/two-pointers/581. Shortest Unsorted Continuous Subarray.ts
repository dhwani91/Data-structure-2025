/*
Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

    Return the shortest such subarray and output its length.



    Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
    Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0


Constraints:

    1 <= nums.length <= 104
    -105 <= nums[i] <= 105


 */


function findMinSubWindow(arr:number[]):number {
    let right:number = arr.length-1;
    let left:number = 0;
    // increment the left pointer until we get the  element is greater than next element
    while(arr[left] < arr[left+1] && left < arr.length-1) {
        left++
    }
    if(left === arr.length-1) return 0;
    // decrement the right pointer until we get the element lesser thn prev element
    while(arr[right] > arr[right-1] && right > -1){
        right--;
    }

    const subArray:Array<number> = arr.slice(left, right+1);
    const subArrMax = Math.max(...subArray);
    const subArrMin = Math.min(...subArray);

    // extend the window to the left to include elements that are greater than subArrayMin
    while(arr[left-1] > subArrMin && left > 0){
        left--;
    }

    while(arr[right+1] < subArrMax && right < arr.length-1 ){
        right++;
    }
    //extend the window to the right to include elements that are less than subArrayMax

    return right - left +1;
}

// console.log(findMinSubWindow([1,3,2,0,-1,7,10])); //5
// console.log(findMinSubWindow([1,2,3])); //0
// console.log(findMinSubWindow([4,3,2,1])); //4
// console.log(findMinSubWindow([1,2,5,3,5,7,7,7,6,10])); //7
console.log(findMinSubWindow([1,2,3,3,3])); //3
