//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

function containsDuplicate(nums: number[]): boolean {
  type Tally = {
    [num: number]: number
  }

  const tally: Tally = {}

  for (let num of nums) {
    if (tally[num]) return true
    tally[num] = 1
  }

  return false
}

const containsDuplicate2 = (nums: number[]): boolean => {
  const uniqNums = new Set<number>(nums)
  return uniqNums.size < nums.length
}
