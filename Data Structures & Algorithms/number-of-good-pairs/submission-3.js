class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const obj = {}
        let count = 0
        for(let i = 0; i<nums.length; i++){
            
            if(nums[i] in obj){
                count += obj[nums[i]]
                obj[nums[i]] +=  1
            }else{
                obj[nums[i]] = 1
            }
        }

        return count
    }
}
