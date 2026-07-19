class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        nn = int(''.join(str(x) for x in digits)) + 1
        return [int(i) for i in str(nn)]
        
        