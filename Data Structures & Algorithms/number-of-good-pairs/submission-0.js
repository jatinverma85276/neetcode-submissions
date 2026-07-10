class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let check = [];

        for(let i = 0; i<nums.length; i++){
            let num = nums[i];
            for(let j = 0;j<nums.length; j++){
                if(i < j && num === nums[j]){
                    check.push([i,j])
                }
            }
        }

        return check.length
    }
}
