class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let freq = new Set();

        for (let i = 0; i<nums.length; i++){
            if(freq.has(nums[i])){
                freq.delete(nums[i])
            }else{
                freq.add(nums[i])
            }
        }

        return Array.from(freq)[0]
    }
}
