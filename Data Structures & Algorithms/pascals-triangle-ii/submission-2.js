class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {

        let arr = [];
        for(let i = 1; i<=rowIndex+2; i++){
            let newAr = []
            for(let j = 1; j<=i;j++){
                if(j===1){
                    newAr.push(1);
                    continue
                }else if(j===i){
                    newAr.push(1);
                }else{
                    newAr.push(arr[i-2][j-2] + arr[i-2][j-1])
                }
                
            }
            arr.push(newAr)
        }
        return arr[rowIndex]
    }
}
