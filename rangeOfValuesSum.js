function calculateSum(arr){
    let sum=0; 
    for(let i=arr[0]; i <= arr[1]; i++){
        sum = sum + i; 
    }
    console.log(sum); 
}

calculateSum([1,9])