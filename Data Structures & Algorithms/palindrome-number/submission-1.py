class Solution:
    def isPalindrome(self, x: int) -> bool:

        x = list(str(x))
        right = '';
        left = '';

        for i in x:
            right += i

        for i in reversed(x):
            left += i
        
        return right == left