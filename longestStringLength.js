// find longest word in a string
function findLongestWordLength(str) {
    let words = str.split(' '); 
    let maxLetters = 0; 
    console.log(words); 
    for(let i=0; i < words.length; i++){
        if(words[i].length > maxLetters){
            maxLetters = words[i].length; 
        }
    }
    return maxLetters;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));