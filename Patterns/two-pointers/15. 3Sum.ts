//The Challenge:
// Given an array of unsorted numbers find all unique triples in it that add up to zero.
//[-3,0,1,2,-1,1,-2]


//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
//
//
// Example 1:
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
//
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
//
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
//sort the array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function serachPairs(nums, targetSum, left, triplets) {
    let right = nums.length - 1;

    while (left < right) {
        let currentSum = nums[left] + nums[right];

        if (targetSum === currentSum) {
            triplets.push([-targetSum, nums[left], nums[right]]);
            left++;
            right--;
            // move left pointer until we find diff num
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }

            // move right pointer until we find get diff integer num
            while (left < right && nums[right] === nums[right + 1]) {
                right--;
            }
        } else if (targetSum < currentSum) {
            right--;
        } else if (targetSum > currentSum) {
            left++;
        }
    }
}
const threeSum = function (nums) {
    // sort the arr
    nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < nums.length; i++) {
        let targetSum = -nums[i];

        // we want to avoid the duplicate
        // if the element we are looking is same as element we seen , we skip it
        if (nums[i] === nums[i - 1]) {
            continue; // Skip the current iteration if the number is a duplicate
        }
        serachPairs(nums, targetSum, i + 1, triplets);
    }

    return triplets;
};
console.log(threeSum([1,3,-2,2,-4,5]));
console.log(threeSum([-5,2,-1,-2,3]));
console.log(threeSum([-3,0,1,2,-1,1,-2]));

