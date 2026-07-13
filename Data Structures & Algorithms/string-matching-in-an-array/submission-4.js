class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {

        words.sort((a,b) => a.localeCompare(b));
        let subArr = [];
        for(let i = 0; i<words.length; i++){

            let word = words[i];

            for(let j = 0; j<words.length; j++){
                if( i === j ){
                    continue
                }
                let secWord = words[j]
                let st = ''
                for(let k = 0, p = 0; k<word.length && p<secWord.length;){
                    if(word[k] === secWord[p]){
                        st = st + word[k]
                        k++;
                        p++;
                    }else{
                        p -= k;   // go back to where match started + 1
                        k = 0; 
                        st=''
                        p++
                    }
                    if(p === secWord.length && st !== word){
                        break
                    }else if(st === word){
                        subArr.push(word)
                        break
                    }
                }
                if(subArr.includes(word)){
                    break
                }
            }
        }
        return subArr
    }
}
