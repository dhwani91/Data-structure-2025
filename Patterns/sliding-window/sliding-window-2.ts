//The Challenge:
// Given an array of positive numbers and a positive number s,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to s.
// Return 0 if no such subarray exists.
const arr:number[] = [1,3,2,2,4,5];
const s:number = 6;

 const findSmallestArrayLength = (arr:number[],s:number) => {
     let windowStart: number = 0, windowEnd: number = 0, minLengthSoFar: number = Infinity, windowSum: number = 0;
     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
         // grow the window
         windowSum += arr[windowEnd];
          // if windowSum >=s ?
         // if not, continue and grow the window
         // if yes, shrink the window (until windowSum < s)
         while (windowSum>= s) {
             let currentMinLength = windowEnd - windowStart +1;
             minLengthSoFar = Math.min(minLengthSoFar, currentMinLength);
             windowSum -= arr[windowStart];
             windowStart++;
         // shrink the window, decrement window start , remove that first element in the winodw
         }
          if(minLengthSoFar === Infinity){
              return 0
          }
         return minLengthSoFar;
     }
 }
// findSmallestArrayLength(arr,s)
console.log(findSmallestArrayLength([1,3,2,2,4,5],6));
console.log(findSmallestArrayLength([2,1,5,2,8],7));

