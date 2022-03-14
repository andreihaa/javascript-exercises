// "ana"
// {
//     a:2,
//     n:1
// }

function extract(word) {
    const letters = {}; 
    for(let i=0; i<word.length; i++){
        let letter = word[i];
        if (!letters[letter]){
            letters[letter] = 1; 
        }
        else {
            letters[letter] = letters[letter] + 1; 
        }
    }
    return letters;
}

function anagram(word1, word2) {
    let words = extract(word1);
    let words2 = extract(word2); 
    
    // let countWords = 0;
    // for(let j = 0; j < word1.length; j++){
    //     countWords = countWords + 1;
    // }
    // console.log(`words1 is ${countWords}`); 

    // let countWords2 = 0; 
    // for(let k = 0; k < word2.length; k++){
    //     countWords2 = countWords2 + 1; 
    // }
    // console.log(`words2 is ${countWords2}`);


    console.log(words);
    console.log(words2);
    
    // Extragem literele din primul cuvant pasat prin functie 
    let keyArr = Object.keys(words);
    console.log(`this is ${keyArr}`);
    // Iteram prin cheile obtinute prin object.keys 
    for(let i = 0; i < keyArr.length; i++){
        // cheia este fiecare litera in parte
        let key = keyArr[i];
        // daca litera iterata prin keyArr.length se gaseste in words2 
        if(words2[key] !== undefined) {
            // verificam daca numarul de fiecare litera din cheie e egal cu numarul de litere de acelasi tip din words 2. 
            if (words[key] !== words2[key]){
                return 'not anagram'; 
            }
            // situatia in care avem o litera care nu se gaseste in al doilea cuvant
        } else {
            return 'not anagram'; 
        }
    }
    return 'is anagram';
}

console.log(anagram('elbowea','belowea')); 
