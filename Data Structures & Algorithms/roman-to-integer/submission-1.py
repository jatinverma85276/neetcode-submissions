class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
        sum = 0
        for i in range(len(s)):
            print(i, "iiii")
            print(sum, "sum")
            if i+1 < len(s) and roman[s[i]] < roman[s[i+1]]:
                sum = sum - (roman[s[i]])
            else:
                sum = sum + roman[s[i]]
            
        
        return sum