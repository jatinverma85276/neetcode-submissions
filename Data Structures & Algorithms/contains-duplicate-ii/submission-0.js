class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let check = {};
        let prev
        for (let i = 0; i<nums.length; i++){
            if(check[nums[i]] !== undefined){
                prev = check[nums[i]]
                if(Math.abs(prev - i) <=k){
                    return true
                }
            }
            check[nums[i]] = i
        }
        return false
    }
}
