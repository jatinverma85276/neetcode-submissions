class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numIndex = {};
        for(let i = 0; i<nums.length; i++){
            numIndex[nums[i]] = i
        }

        for(let i = 0;i<nums.length;i++){
            let diff = target - nums[i]

            if(numIndex[diff] !== undefined && numIndex[diff] !== i){
                return [i, numIndex[diff]]
            }
        }
        return []
    }
}
