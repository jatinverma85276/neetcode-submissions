class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // ✅ Cleaner
        const check = new Set(nums);   // build set in one line

        for(let i = 0; i <= nums.length; i++){
            if(!check.has(i)) return i;
        }
    }
}
