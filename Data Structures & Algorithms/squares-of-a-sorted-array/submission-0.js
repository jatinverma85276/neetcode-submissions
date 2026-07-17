class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map((e) => (e*e)).sort((a,b) => a-b)
    }
}
