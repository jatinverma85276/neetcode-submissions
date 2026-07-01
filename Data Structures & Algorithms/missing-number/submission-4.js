class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a, b) => a - b); 
        let num = 0;

        for(let i=0;i<=nums.length; i++){
            if(num !== nums[i]){
                return i
            }
            num++
        }
    }
}
