function calculateSum(arr){
    let sum=0; 
    for(let i=arr[0]; i <= arr[1]; i++){
        sum = sum + i; 
    }
}

console.log(calculateSum([1,9]))


function sumAll(arr) {
    if(arr[0] < arr[1]){
        for(let i=arr[0]; i<=arr[1]; i++){
        sum = sum + i; 
        }
    }
    else{
        for(let i=arr[1]; i<=arr[0]; i++){
        sum = sum + i; 
        }
    }
}

function sumAll2(arr) {
    let sum = 0; 
    const sorted = arr.sort();
    for(let i=sorted[0]; i<=sorted[1]; i++){
      sum = sum + i; 
    }
    return sum; 
  }
  
// console.log(sumAll2([1, 4]));
console.log(sumAll2([5, 10]));
console.log(sumAll2([10, 5]));