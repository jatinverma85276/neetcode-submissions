class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let temp_heights = [...heights]

        temp_heights.sort((a,b) => (a-b));

        let count = 0;

        for(let i = 0; i<heights.length; i++){
            if(heights[i] !== temp_heights[i]){
                count += 1
            }
        }

        return count
    }
}
