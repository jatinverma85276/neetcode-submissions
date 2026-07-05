class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        let num_sum = nums.reduce((a,b) => (a+b),0);
        let left  = 0;
        for (let i = 0; i<nums.length; i++){
            let right = num_sum - (nums[i])
            num_sum = num_sum - nums[i]
            console.log(right, "Right ")
            left = left + (nums[i-1] || 0)
            console.log(left, "left")
            if(left === right){
                return i
            }
            if(i === nums.length -1){
                return -1
            }
            
        }
    }
}
