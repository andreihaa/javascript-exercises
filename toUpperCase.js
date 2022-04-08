const string = 'ana are multe mere';

function uppercased(string){
    const lowercassed = string.toLowerCase(); 
    const splitted = lowercassed.split(' '); 
    newStr = [];
    for(let i=0; i<splitted.length; i++){
        newStr.push(splitted[i].slice(0,1).toUpperCase().concat(splitted[i].slice(1)))
        console.log(splitted[i].slice(0,1).toUpperCase().concat(splitted[i].slice(1)))
        // newStr.push(splitted[i][0].toUpperCase())
    }
    return newStr.join(' ')
}

console.log(uppercased(string)); 