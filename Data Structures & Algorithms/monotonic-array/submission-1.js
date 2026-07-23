class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let increase = nums[0] <= nums[1]
        console.log(nums[0] < nums[1], "nums[0] < nums[1]")
        let flag = false
        if(increase){
            for(let i = 1; i<nums.length; i++){
                console.log(nums[i-1] < nums[i], "nums[i-1]")
                if(nums[i-1] <= nums[i]){
                    flag = true
                }else{
                    flag = false
                    break
                }
            }
        }else{
            for(let i = 1; i<nums.length; i++){
                if(nums[i-1] >= nums[i]){
                    flag = true
                }else{
                    flag = false
                    break
                }
            }
        }

        return flag
    }
}
