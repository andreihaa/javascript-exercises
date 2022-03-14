function findRecurring(word){
    const characterCount = {};
    let maxValue = 0; 
    let maxKey = ''; 
    for(let i=0; i < word.length; i++){
        if(characterCount.hasOwnProperty(word[i])){
            characterCount[word[i]]++; 
        }
        else{
            characterCount[word[i]] = 1; 
        }
    }
    for(char in characterCount){
        console.log(characterCount[char])
        if(characterCount[char]> maxValue){
            maxValue = characterCount[char]; 
            maxKey = char; 
        }
    }
    return `${maxKey} ${"appears"} ${maxValue} times`; 
}

console.log(findRecurring("samson"))