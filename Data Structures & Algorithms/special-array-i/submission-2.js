class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {

        if(nums.length === 1) return true
        
        let check = 'even'
        let tt = false

        for(let i = 0; i<nums.length; i++){
            let num = nums[i]

            if(num % 2 === 0 && check === 'even'){
                check = 'odd'
                tt = true
            }else if(num % 2 !== 0 && check === 'odd'){
                check = 'even'
                tt = true
            }else{
                tt = false
                break
            }
        }

        return tt

    }
}
