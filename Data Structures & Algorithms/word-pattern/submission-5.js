class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        if(pattern.length !== s.split(' ').length){
            return false
        }
        const check = {};
        const pack = {};
        s = s.split(" ")
        for (let i = 0; i<pattern.length; i++){
            if(check.hasOwnProperty(pattern[i]) && check[pattern[i]] !== s[i]){
                return false
            }
            if(pack.hasOwnProperty(s[i]) && pack[s[i]] !== pattern[i]){
                return false
            }
            
            check[pattern[i]] = s[i]
            pack[s[i]] = pattern[i]
            
        }
        return true
    }
}
