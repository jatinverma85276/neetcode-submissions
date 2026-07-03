class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {

        const missing_arr = [];

        for(let i = 1; i<=nums.length; i++){
            if(!nums.includes(i)){
                missing_arr.push(i)
            }
        }

        return missing_arr
    }
}
