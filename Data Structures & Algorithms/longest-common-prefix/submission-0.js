class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let min = strs[0].length;

        for(let i = 1; i<strs.length; i++){
            if(min > strs[i].length){
                min = strs[i].length
            }
        }

        let str = ""
        strs.sort()
        let first = strs[0]
        let last = strs[strs.length -1]
        for(let i=0; i<min;i++){
            if(first.charAt(i) !== last.charAt(i)){
                    return str
                }
                str += first.charAt(i)
            }
        return str;


    }
}
