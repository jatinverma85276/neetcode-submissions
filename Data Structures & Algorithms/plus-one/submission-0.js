class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        digits = parseInt(digits.join(''))

        return (digits + 1).toString().split('')
    }
}
