class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let arr = []
        for(let i = 0; i<matrix[0].length; i++){
            console.log("checking")
            let newAr = []
            for(let j = 0; j<matrix.length; j++){
                console.log(i,j, "i, j")
                console.log(matrix[j][i], "[j][i]")
                newAr.push(matrix[j][i])
            }
            console.log(newAr, "NewAr")
            arr.push(newAr)

        }
        console.log(arr, "arr")

        return arr
    }
}
