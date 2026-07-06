class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let tt = []
        for(let i = 1; i<=numRows; i++){
            let kk = []
            for(let j = 1; j<=i; j++){
                if(j === 1 ){
                    kk.push(1)
                    continue
                }else if(j === i){
                    kk.push(1)
                    continue
                }
                let sum = tt[i-2][j-2] + tt[i-2][j-1]
                kk.push(sum)
            }
            tt.push(kk)
        }
        return tt
    }
}
