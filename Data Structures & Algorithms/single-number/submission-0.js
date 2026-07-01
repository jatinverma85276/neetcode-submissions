class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let freq = {};

        for(let i = 0; i<nums.length; i++){
            if(freq.hasOwnProperty(nums[i])){
                freq[nums[i]] = freq[nums[i]] += 1
            }else{
                freq[nums[i]] = 1
            }
        }
        return Object.keys(freq).find(k => freq[k] === 1);;
    }
}
