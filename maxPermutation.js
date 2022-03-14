// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]

function toNumber(arr){
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str = str + arr[i]; 
    }
}


function allPermutations (arr){
    let str = arr.join();
    let aux = 0; 
    do {
        for(let i = arr.length - 1; i > 0; i--){     
            aux = arr[i];
            arr[i] =  arr[i-1]; 
            arr[i - 1] = aux; 
            console.log(Number.parseInt(arr.join(''))); 
        }
    }while (str !== arr.join())
}

allPermutations([1,2,3])

// 123
// 132
// 312
// 321
// 231
// 213
// 123


