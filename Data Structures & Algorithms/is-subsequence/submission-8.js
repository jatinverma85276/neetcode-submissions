class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(s.length === 0){
            return true
        }
        let flag = false
        for(let i = 0, j = 0; i < s.length && j<t.length;){
            if(s[i] === t[j]){
                i++;
                j++;
            }else{
                j++;
            }
            if(i === s.length){
                flag = true
            }
        }
        return flag
    }
}
