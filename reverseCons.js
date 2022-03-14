function reverseCons(string){
    const arr = Array.from(string); 
    const consonant = arr.filter((letter) =>{
        if(!['a','e','i','o','u',' '].includes(letter.toLowerCase())){
            return true;
        }
        else{
            return false; 
        }
    })
    console.log('this is consonant', consonant)
    const reversedArray = createReverseString(consonant); 
    console.log(reversedArray.join(''))
    return consonant; 
}

console.log(reverseCons('Alex are mere'))


function createReverseString(string){
    const reverseString=[]
    for(let i=string.length; i>=0; i--){
        reverseString.push(string[i])
    }
    return reverseString
}

// console.log(createReverseString())