//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.

//Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
//
// Input: nums = [], target = 0
// Output: [-1,-1]


function searchRange(nums: number[], target: number): number[] {

let result: number[] = [-1,-1];
 let left:number =0, right:number=nums.length-1;
 while (left <= right) {
     let mid = (right- left) /2 +1


 }



return result
}