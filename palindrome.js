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

console.log(isPalindrome('abcdcba')); 
