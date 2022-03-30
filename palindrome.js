const word = 'abcde'; 



function isPalindrome(word) {
    let reverse = '';

    for(let i = word.length-1; i >= 0; i--){
        console.log(word[i]);
        reverse = reverse + word[i]; 
    }
    console.log(reverse); 
    
    
    if (reverse === word) {
        return true; 
    } else {
        return false; 
    }
}

// console.log(isPalindrome('abcdcba')); 

function isPalindrome2(word){
    let lowercassed = word.toLowerCase(); 
    let newWord = lowercassed
        .split("")
        .reverse()
        .join("");
    if(newWord === lowercassed){
        return true;
    }
    else{
        return false; 
    }
}

console.log(isPalindrome2('mama')); 
console.log(isPalindrome2('wow'))