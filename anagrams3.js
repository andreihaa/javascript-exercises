function isAnagram(wordA, wordB){
    const lowerCaseA = wordA.toLowerCase()
    const lowerCaseB = wordB.toLowerCase()

    if(lowerCaseA.length === lowerCaseB.length){
       return [...lowerCaseA].sort().join("") === [...lowerCaseB].sort().join("")
    }
    else{
        return 'not anagram'
    }
}

console.log(isAnagram('mare', 'eram'));
console.log(isAnagram('mist', "dust"));
console.log(isAnagram('silent', 'listen'));