class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let len = 0;
        for(let i = 0,j = 0; i<t.length && j<s.length;){
            if(t[i] === s[j]){
                i++;
                j++;
            }else{
                j++
            }
            if(j === s.length){
                len = t.split('').splice(i).length
            }
        }

        return len
    }
}
