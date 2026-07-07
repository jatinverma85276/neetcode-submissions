class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let newArr = [];

        for(let i = 0; i<arr.length; i++){
            let max = 0
            for(let j = i+1; j<arr.length; j++){
                if(max < arr[j]){
                    max = arr[j]
                }
            }
            newArr.push(max)
            if(i === arr.length-1){
                newArr.pop()
                newArr.push(-1)
            }
        }
        return newArr;
    }
}
