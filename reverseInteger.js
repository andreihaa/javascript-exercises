function reverseInt(int){
    const intToString = int.toString();
    const splitedReversed = intToString.split('').reverse().join(""); 
    let stringToInt = parseInt(splitedReversed);
    console.log(stringToInt)
}



reverseInt(1234); 