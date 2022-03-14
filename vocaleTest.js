function numberOfVowels(str){ 
    let vowels = [];
    let vowelsCount = 0; 
    let vowelsA = 0;
    let vowelsE = 0;
    let vowelsI = 0;
    let vowelsO = 0;
    let vowelsU = 0;
    
    for (let i=0; i<str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            vowels.push(str[i]); 
         }
    }
    for (let j=0; j<vowels.length; j++){
        if (vowels[j] === 'a'){
        vowelsA = vowelsA + 1; 
        }
        if( vowels[j] === 'e'){
        vowelsE = vowelsE + 1; 
        }
        else if( vowels[j] === 'i'){
            vowelsI = vowelsI + 1; 
        }
        else if( vowels[j] === 'o'){
            vowelsO = vowelsO + 1; 
        }
        else if( vowels[j] === 'u'){
            vowelsU = vowelsU + 1; 
        }
        vowelsCount= vowelsCount + 1; 
    }
    console.log(vowels);
    console.log(`There are ${vowelsCount} vowels in your phrase`);
    console.log(`There are ${vowelsA} vowels of A in your phrase`); 
    console.log(`There are ${vowelsE} vowels of E in your phrase`); 
    console.log(`There are ${vowelsI} vowels of I in your phrase`); 
    console.log(`There are ${vowelsO} vowels of O in your phrase`);
    console.log(`There are ${vowelsU} vowels of U in your phrase`);
    } 
numberOfVowels('mama are mere, oua, untura si slanina');
// numberOfVowels('daca ai carte, ai parte, daca n-ai carte, ai quatre'); 
    
    