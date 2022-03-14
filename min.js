const arr = [8, 3, 2, 10, 5, 33, 22];

let min = arr[0]; 
for (let i = 0; i < arr.length; i=i + 1){
    if(arr[i] < min){
        if (arr[i] % 2 !== 0){
            min = arr[i]; 
        }
    } 
}
console.log(min);
