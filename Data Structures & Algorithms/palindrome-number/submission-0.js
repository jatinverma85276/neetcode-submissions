class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        
        x = x.toString().split('')
        console.log(x, "x.toString().split('')")
        let right = '';
        let left = '';

        for(let i = 0; i<x.length; i++){
            right += x[i]
        }
        for(let i = x.length-1; i>=0; i--){
            left += x[i]
        }

        console.log(right, left, "right, left")
        return right === left
    }
}
