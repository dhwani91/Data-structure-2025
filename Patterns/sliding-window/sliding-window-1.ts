// Problem : given an array, find the avg of all contiguous subarrays of size "K"
const arr= [1,2,3,4,5];  const k=3


const avgSubArray = (arr: number[], k: number) => {
    let averages: any=[];
    let windowStart:number =0;
    let windowSum:number=0;

    for(let windowEnd:number=0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        if(windowEnd >= k-1){
            averages.push(windowSum/k);
            windowSum -= arr[windowStart];
            windowStart++;

            // add the avg of current window in averages
            // move the windowStart
            // substract the integer at windowStart from window sum


        }
    }
    return averages;
}

console.log(avgSubArray(arr,k));