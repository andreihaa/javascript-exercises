let arr = [1,2,3,4,5,6,7,8]
let number = [];

for(let i = arr.length-1; i >= 0; i--) {
    // console.log(i);
    number = number + arr[i];
    console.log(number); 
}