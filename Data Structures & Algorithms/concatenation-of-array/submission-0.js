class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = []
        arr = [...nums,...nums]
        return arr
    }
}
