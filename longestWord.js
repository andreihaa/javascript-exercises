const phrase = 'ana are mere , alex are pere , noi avem un pepene';

function longestWord(string){
    let max = 0; 
    let newString = string.split(" ");
    for(let i=0; i < newString.length; i++){
        console.log(newString[i]);

        if(newString[i].length > max){
            max = newString[i].length; 
        }
    }
    console.log(max); 
}

longestWord(phrase);