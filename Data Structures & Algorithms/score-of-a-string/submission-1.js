class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let value = 0
        for(let i = 0; i<s.length; i++){
            if(i+1 !== s.length){
                value += Math.abs(s.charCodeAt(i+1) - s.charCodeAt(i))
            }
        }
        return value;
    }
}
