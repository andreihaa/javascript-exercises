const arr = [1,2,3,4,5]; 
let newArr = []; 

// for(let i = 0; i<arr.length; i++){
//     newArr.push(increment(arr[i])); 
// }

// function increment(number){
//     const newNumber = number + 1; 
//     return newNumber; 
// }

const newArr2 = arr.map(function increment(number){
    const newNumber = number + 1; 
    return newNumber; 
})

console.log(newArr2); 

const evenNumbers = arr.filter(function isEven(number){
    return number % 2 === 0; 
})
console.log(evenNumbers); 

const number = arr.find(function num(number){
    if(number === 3){
        return true; 
    }
    else{
        return false; 
    }
})
console.log(number); 