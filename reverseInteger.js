function reverseInt(int){
    const intToString = int.toString();
    const splitedReversed = intToString.split('').reverse().join(""); 
    let stringToInt = parseInt(splitedReversed, 10);
    console.log(stringToInt)
}



reverseInt(1234); 