const arr = [1,2,3,4,5,6,7,8,9,10]; 

function splitBy(arr,limiter){
    let newArr = []; 
    for(let i=0; i<arr.length; i++){
        newArr.push(arr.splice(i,limiter))
    }
    return newArr; 
}

console.log(splitBy(arr, 2)); 