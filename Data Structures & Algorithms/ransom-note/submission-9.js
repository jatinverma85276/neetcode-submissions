class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {

        const ransomCount = {};
    const magazineCount = {};

    for (let i = 0; i < ransomNote.length; i++) {
        ransomCount[ransomNote[i]] = (ransomCount[ransomNote[i]] || 0) + 1;
    }

    for (let i = 0; i < magazine.length; i++) {
        magazineCount[magazine[i]] = (magazineCount[magazine[i]] || 0) + 1;
    }

    for (let key in ransomCount) {
        if (!magazineCount[key] || ransomCount[key] > magazineCount[key]) {
            return false;
        }
    }

    return true;
    }
}
