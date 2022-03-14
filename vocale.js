


function numberOfVowels(str){  

    const vowels = {
        A: 0,
        E: 0,
        I: 0,
        O: 0,
        U: 0
    } 

    const arr = Object.keys(vowels);
    for (let i=0; i<str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            if (str[i] === 'a'){
                vowels.A = vowels.A + 1; 
                }
                if(str[i] === 'e'){
                vowels.E = vowels.E + 1; 
                }
                else if(str[i] === 'i'){
                    vowels.I = vowels.I + 1; 
                }
                else if(str[i] === 'o'){
                    vowels.O = vowels.O + 1; 
                }
                else if(str[i] === 'u'){
                    vowels.U = vowels.U + 1; 
                }
         }
    }

    let totalVowels = 0; 
    for (let j = 0; j < arr.length; j++) {
        let key = arr[j];
        console.log(`${key}  ${vowels[key]}`)
        totalVowels = totalVowels + vowels[key];
    }
    
    console.log(arr); 
    console.log(`There are ${vowels.A} vowels of A in your phrase`); 
    console.log(`There are ${vowels.E} vowels of E in your phrase`); 
    console.log(`There are ${vowels.I} vowels of I in your phrase`); 
    console.log(`There are ${vowels.O} vowels of O in your phrase`);
    console.log(`There are ${vowels.U} vowels of U in your phrase`);
    console.log(`Total vowels ${totalVowels}`);
    } 
numberOfVowels('mama are mere, oua, untura si slanina');
// numberOfVowels('daca ai carte, ai parte, daca n-ai carte, ai quatre'); 

// function numberOfVowels (str) {
//     let count = 0;
//     const vowels = ["a", "e", "i", "o", "u"]
//     for(let i = 0; i <= str.length-1; i++){   
//         console.log(str[i]); 
//         if (str[i] === vowels[0]){
//             count.push(str);
//             console.log(count);
//         }
//     }
//     return count; 
//     // console.log(count);
// }
// numberOfVowels('mama are mere')


// if (litere[i] === 'a'){
//     return vocale.push(litere[i]);
// } else if (litere[i] === 'e'){
//     return vocale.push(litere[i]);
// } 

