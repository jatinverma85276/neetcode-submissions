class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        // if()
        let flag = false
        for(let i = 0; i<nums.length; i++){
            if(nums[i] % 2 !== nums[i-1] % 2){
                flag = true
            }else{
                flag = false
                break
            }
        }

        return flag

    }
}
