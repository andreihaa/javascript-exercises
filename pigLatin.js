// If a word begins with a consonant, 
// take the first consonant or a consonant cluster, 
// move it to the end of the word, and add “ay” to it.
// If a word begins with a vowel, just add “way” at the end.

// Algorithm Example.

  // translatePigLatin("california") should return "aliforniacay".
  // translatePigLatin("algorithm") should return "algorithmway".


function translatePigLatin(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u']; 
    console.log(str[0])
        if(vowel.includes(str[0])){
            return str.concat('way');
        }
        else{
           return str.slice(1).concat(str[0]).concat('ay');
        }
}
  
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm")); 

