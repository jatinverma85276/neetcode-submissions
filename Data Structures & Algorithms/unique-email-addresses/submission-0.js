class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let unique = new Set();

        for(let i = 0; i<emails.length; i++){
            let [local, domain] = emails[i].split('@') 
            local = local.split('+')[0]
            local = local.replaceAll('.', '')
            unique.add(`${local}@${domain}`)
        }
        console.log(unique)
        return unique.size
    }
}
