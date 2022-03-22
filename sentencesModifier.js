function longestWord(string){
    const splitted = string.split(" ")
    let count = 0; 
    let longestWord = ""; 
    for(let i=0; i<splitted.length; i++){
        if(splitted[i].length > count){
            count = splitted[i].length;
            longestWord = splitted[i]; 
        }
    }
    console.log(count + " " + longestWord);
}

function letterCount(string){
    const letterCount = {}

    for(let i=0; i<string.length; i++){
        if(string[i] !== " "){
            if(!letterCount[string[i]]){
                letterCount[string[i]] = 1
            }
            else{
                letterCount[string[i]]++;
            }
        }
    }
    console.log(letterCount)
}

function capitaliseFirstLetter(string){

}


const lowerCased = "A Mind Needs Books Like A Sword Needs A Whetstone".toLowerCase();

// longestWord(lowerCased);
letterCount(lowerCased)