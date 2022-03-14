const arr = [8, 3, 2, 10, 5, 33, 22];

let max = 0; 
for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }
}