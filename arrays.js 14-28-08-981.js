// const strings = ['a', 'b', 'c', 'd']; 

// strings.push('e'); 
// strings.pop(); 

// strings.unshift('x'); 

// strings.splice(2, 1, 'alien', 'mustard', 'onion'); 


// console.log(strings); 


//  class MyArray {
//      constructor (){
//          this.length = 0;
//          this.data = {}; 
//      }

//      get(index){
//          return this.data[index];
//      }
//      push(item){
//         this.data[this.length] = item;
//         this.length ++; 
//         return this.length; 
//      }
//      pop(){
//          const lastItem = this.data[this.length-1];
//          delete this.data[this.length-1];
//          this.length--;
//          return lastItem;
//      }

//      delete(index){
//          const item = this.data[index]; 
//          this.shiftItems(index);
//          return item; 
//      }

//      shiftItems(index){
//         for(let i = index; i < this.length - 1; i++){
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length-1];
//         this.length--;
//      }
//  }

//  const newArray = new MyArray(); 
//  newArray.push('hi'); 
//  newArray.push('you');
//  newArray.push('!');
//  newArray.delete(1); 
//  newArray.push('are');
//  newArray.push('nice');
//  newArray.delete(1); 
// //  newArray.pop(); 

//  console.log(newArray);

// function reverse(str) {
//     let newStr = ''; 
//     for(let i = str.length - 1; i >= 0; i--){
//         newStr = newStr + str[i];
//         // newStr.push(str[i]); 
//     }
//     console.log(newStr); 
// }

// reverse('my name is andrei'); 


// function mergeSortedArrays (array1, array2){
//     const mergedArray = [];
//     let array1Item = array1[0]; 
//     let array2Item = array2[0]; 
//     let i = 1; 
//     let j = 1; 

//     //Check input
//     if (array1.length === 0){
//         return array2; 
//     }
//     if (array2.length === 0){
//         return array1; 
//     }

//     while(array1Item || array2Item){
//         console.log(array1Item, array2Item);
//         if(!array2Item || array1Item < array2Item){
//             mergedArray.push(array1Item); 
//             array1Item  = array1[i]; 
//             i++;
//         }
//         else{
//             mergedArray.push(array2Item); 
//             array2Item = array2[j];
//             j++; 
//         }
//     }

//     return mergedArray; 
// }


// mergeSortedArrays([0,3,4,31], [4,6,30]);


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [2, 4, 6, 9, 11]; 

// function sumUp(arr, target){
//     let result = []; 
//     for(let i=0; i < arr.length; i++){
//         console.log('this is i:', arr[i]);
//         for(let j=0; j < arr.length; j++){
//             console.log('this is j:', arr[j]);
//             if(arr[i] + arr[j] === target){
//                 return result = [i, j];
//             }
//         }
//     }
// }

// console.log(sumUp(nums, 11)); 

// const nums = [-2,1,-3,4,-1,2,1,-5,4]; 

// sum = (((((-2) + 1) + - 3) + 4) + -1) + 2 + 1 + -5 + 4 
// sum2 = 1 + 1 + 4 + -1 + 2 + 1 + - 5 + 4 
// sum3 = -3 + 4 + -1 + 2 +1 + -5 + 4 

// sumAndrei = (-2+ 1) = -1 > max /false 
// sumAndrei2 = (-2 + -3) = -5 >max / false

// function LSS(nums) {
//     const len = nums.length;
//     let max = -Number.MAX_VALUE;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//       sum = 0;
//       for (let j = i; j < len; j++) {
//         sum = sum + nums[j];
//         if (sum > max) {
//           max = sum;
//         }
//       }
//     }
//     return max;
//   }

// console.log(LSS(nums)); 



// function subArray(arr){
//     let max = 0; 
//     let maxIndex = 0; 
    
//     for(let i = 0; i < arr.length; i++){
//         for(let length = 1; length <= arr.length; length++){ 
//             let sum = 0; 
//             for(let j = i; j <= i + 1; j++){
//                 sum = sum + arr[j]; 
//             }
//             if(sum > max){
//                 max = sum; 
//             }
//         }
//     }
//     console.log(max); 
//     console.log(maxIndex); 
// }


let nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZero(arr){
    for(let i=0; i< arr.length; i++){
        if(arr[i] === 0){
            for(let j = i; j< arr.length-1; j++){
                console.log(arr)
                let aux;
                aux = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = aux;
            }
        }
    }
}

// moveZero(nums); 
// console.log(nums); 

const Queue = require('/Users/andrei/andrei/Personal/IT/JavaScript/BlueSierra/src/loops/queue.js');



function moveZero2(arr){
    const q = new Queue(); 
    let count = 0; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            q.enqueue(arr[i]); 
        }
        else{
            count = count + 1; 
        }
    }
    for(let i = 0; i < count; i++){
        q.enqueue(0);
    }
    q.print(); 
}

moveZero2(nums); 
