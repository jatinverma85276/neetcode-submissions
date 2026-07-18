class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const roman = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
        let sum = 0
        for(let i = 1; i<=s.length; i++){
            if(roman[s[i-1]] < roman[s[i]]){
                console.log((roman[s[i]] - roman[s[i-1]]), "(roman[s[i]] - roman[s[i-1]])")
                sum = sum + (roman[s[i]] - roman[s[i-1]])
                i += 1
            }else{
                console.log(roman[s[i-1]], "roman[s[i-1]]")
                sum = sum + roman[s[i-1]]
            }
        }

        return sum
    }
}
