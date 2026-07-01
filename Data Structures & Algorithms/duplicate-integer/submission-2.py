class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:

        size = len(nums);

        sets = set();

        for i in nums:
            sets.add(i)

        if len(sets) != size:
            return True
        return False
        