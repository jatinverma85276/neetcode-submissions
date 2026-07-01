class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let check = new Set();

        for(let i = 0; i<=nums.length; i++){
            check.add(nums[i])
        }
        for(let i = 0; i<=nums.length; i++){
            if(!check.has(i)){
                return i
            }
        }
    }
}
