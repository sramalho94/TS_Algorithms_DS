/* 
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer iwth a calculation error less than 10 ^ -5 will be accepted.
*/

function findMaxAverage(nums: number[], k: number): number {
  let maxSum: number = 0
  let currentSum: number = 0

  for (let i = 0; i < k; i++) {
    maxSum += nums[i]
  }
  currentSum = maxSum

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i]
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum / k
}
