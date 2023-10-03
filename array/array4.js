/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i !=j i !=k and j != k and nms[i] + nums[j] + nums[k] == 0
Notice that the solution set must not contain duplicate triplets */
function threeSum(nums) {
    var triplets = [];
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        var l = i + 1;
        var r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                triplets.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            }
            else if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    return triplets;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
