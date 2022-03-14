function notPalindrome(arr){
    const notPalindrome = [];
    for(let i=0; i < arr.length; i++){
        if(!palindrome(arr[i])){
            notPalindrome.push(arr[i]); 
        }
    }
    return notPalindrome; 
}




const arr = ['wow', 'get']

// console.log(notPalindrome(arr)); 

function notPalindromeHOF(arr){
    return arr.filter((el) =>{
        if(!palindrome(el)){
            return true;
        }
    })
}

// console.log(notPalindromeHOF(arr)); 


function palindrome(string){
    let newString = ''
    for(let i=string.length - 1; i >= 0; i--){
        newString = newString.concat(string[i])
    }
    if(string === newString){
        return true; 
    }
    else{
        return false; 
    }
}

// palindrome('get')
// palindrome('wow')