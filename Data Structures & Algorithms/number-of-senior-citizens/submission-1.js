class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = details.filter((e) => {
            let ch = e.slice(11,13)
            return (ch > 60)
        })

        return count.length
    }
}
