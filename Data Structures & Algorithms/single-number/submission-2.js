class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const freq = {};

        for(let i = 0; i<nums.length; i++){
            if(nums[i] in freq){
                freq[nums[i]] += 1
            }else{
                freq[nums[i]] = 1
            }
        }
        console.log(freq, "lml")
        return Object.keys(freq).filter((e) => freq[e]===1)[0]
    }
}
