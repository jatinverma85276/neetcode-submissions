class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let arr = [];

        for(let i = 0; i<nums1.length; i++){
            let num = nums1[i]
            for(let j = 0; j<nums2.length; j++){
                if(num === nums2[j]){
                    let found = false;
                    for(let k = j+1; k<nums2.length; k++){
                        if(nums2[k] > num ){
                            arr.push(nums2[k])
                            found = true
                            break
                        }
                       
                    }
                     if(!found){
                            arr.push(-1)
                    }
                    
                }
            }
        }

        return arr
    }
}
