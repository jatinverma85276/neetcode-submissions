class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let freq1 = new Set(nums1);
        let freq2 = new Set(nums2);

        let maxCount = Math.min(freq1.length, freq2.length);
        freq1 = Array.from(freq1);
        freq2 = Array.from(freq2);

        let countArray = []
        for(let i = 0; i<maxCount;i++){
            if(freq1[i] === freq2[i]){
                countArray.push(freq1[i])
            }
        }

        return countArray
    }
}
