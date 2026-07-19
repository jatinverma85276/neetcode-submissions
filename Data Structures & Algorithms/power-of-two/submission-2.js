class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        let flag = false
        for(let i = 0; 2**i<=n; i++){
            if(2**i === n){
                flag = true
                break
            }
        }

        return flag
    }
}
