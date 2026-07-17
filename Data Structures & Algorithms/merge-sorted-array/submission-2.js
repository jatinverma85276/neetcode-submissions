class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        
        let count = 0
        for(let i = 0; i<m+n; i++){
            console.log(nums1[i], "lmlml")
            console.log(nums1[i] === 0, "sknknkdk")
            if(nums1[i] === 0 && count !== n){
                console.log(nums1[i], nums2[count],count, "Count++")
                nums1[i] = nums2[count]
                count += 1
                continue
            }
            console.log(nums1[i], "knknkn")
            if(count === n){
                break
            }
        }

        return nums1.sort((a,b) => a-b)
        
    }
}
