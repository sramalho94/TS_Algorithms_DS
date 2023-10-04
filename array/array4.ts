/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i !=j i !=k and j != k and nms[i] + nums[j] + nums[k] == 0
Notice that the solution set must not contain duplicate triplets */

function threeSum(nums: number[]): number[][] {
  const triplets: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        triplets.push([nums[i], nums[l], nums[r]])
        l++

        while (l < r && nums[l] === nums[l - 1]) {
          l++
        }
      }
    }
  }
  return triplets
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
