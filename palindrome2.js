function palindrome(str) {
    let noSpecialCharacters = str.replace(/[^A-Z0-9]/ig, "");
    let newStr = noSpecialCharacters.toLowerCase();
    let reversed = newStr.split("").reverse().join("");
    // console.log('this is reversed:', reversed)
    // console.log(newStr)
    if(newStr === reversed){
        return true;
    }
    else{
        return false; 
    }
    
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("race CAR"));
  console.log(palindrome("2_A3*3#A2"));