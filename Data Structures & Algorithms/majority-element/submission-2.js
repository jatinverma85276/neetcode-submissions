class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const check = {};
        const max_count = Math.floor((nums.length)/2);

        for(let i = 0; i<nums.length; i++){
            if(nums[i] in check){
                check[nums[i]] += 1;
            }else{
                check[nums[i]] = 1
            }
        }
        const num = Object.keys(check).filter((a) => (check[a] > max_count))
        return num[0]
    }
}
