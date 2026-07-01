class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let size = nums.length;

        let sets = new Set();

        for(let i = 0; i<size; i++){
            sets.add(nums[i])
        }

        if(sets.size !== size){
            return true
        }
        return false
    }
}
