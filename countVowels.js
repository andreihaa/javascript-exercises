


function countVowels(string){
    let noPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, "")
    let onlyVowels = ''
    let vowelsObj = {};
    let maxCount = 0;
    let maxKey = "";
    let newStr = string.split(" ");
    console.log(newStr); 

    for(let i = 0; i < noPunctuation.length; i++){
        if('a' === noPunctuation[i] || 
            'e' === noPunctuation[i] || 
            'i' === noPunctuation[i] || 
            'o' === noPunctuation[i] || 
            'u' === noPunctuation[i] ){
            onlyVowels = onlyVowels + noPunctuation[i];
        }
        // if(['a','e','i','o','u'].includes(noPunctuation[i])){
        //     onlyVowels = onlyVowels + noPunctuation[i]; 
    }

    for(let i=0; i < onlyVowels.length; i++){
        if(vowelsObj.hasOwnProperty(onlyVowels[i])){
            vowelsObj[onlyVowels[i]]++; 
        }
        else{
            vowelsObj[onlyVowels[i]] = 1; 
        }
    }
    
    for(char in vowelsObj){
        if(vowelsObj[char] > maxCount){
            maxCount = vowelsObj[char]; 
            maxKey = char; 
        }
    }
    console.log(maxKey + maxCount)
}

countVowels('ana are mere, adi are pere')