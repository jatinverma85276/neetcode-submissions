class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const arr_count = {};

        for(let  i = 0; i < arr.length; i++){
            arr_count[arr[i]] = (arr_count[arr[i]] || 0) + 1
        }
        console.log(arr_count, "arr_count")
        let count_check = Object.keys(arr_count).filter((arr) => arr_count[arr] === 1)

        if(count_check.length < k){
            return ""
        }
        return count_check[k-1]
    }

}
