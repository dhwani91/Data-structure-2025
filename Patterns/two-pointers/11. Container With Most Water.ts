//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.

//Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:
//
// Input: height = [1,1]
// Output: 1


function maxArea(arr: number[]): number {
    let maxWaterAreaSoFar:number= 1,left:number=0, right:number= arr.length-1;

    while(left < right){
       let  length = right - left;
       let height = Math.min(arr[right], arr[left])
       const currentWaterArea = length * height
        maxWaterAreaSoFar = Math.max(currentWaterArea,maxWaterAreaSoFar);
       if(arr[left]<arr[right]){
           left++
       }else if(arr[right]<arr[left]){
           right--
       } else if(arr[left] === arr[right]){
           left++;
       }
    }

return maxWaterAreaSoFar;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));