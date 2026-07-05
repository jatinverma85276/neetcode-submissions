class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        for (let i = 0; i<nums.length; i++){
            let left = 0;
            let right = 0;
            for(let j = 0; j<nums.length;j++){
                if(i>j && i !== j){
                    left = left + nums[j]
                }
                if( j>= i && i!==j){
                right = right + nums[j]
                }
            }
            console.log(left, "Left")
            console.log(right, "Right")
            if(left === right){
                console.log(i, "I")
                return i
            }
            if(i === nums.length -1){
                return -1
            }
            
        }
    }
}
