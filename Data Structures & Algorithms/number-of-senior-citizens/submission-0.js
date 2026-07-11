class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = details.map((e) => {
            return e.slice(11,13)
        })

        console.log(count, "Count")
        let greaterThanSixty = count.filter((e) => (e > 60))

        return greaterThanSixty.length
    }
}
