class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let check = [];

        for(let i = 0; i<nums.length; i++){
            let num = nums[i];
            for(let j = i+1;j<nums.length; j++){
                if(num === nums[j]){
                    check.push([i,j])
                }
            }
        }

        return check.length
    }
}
