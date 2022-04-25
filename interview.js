// console.log("interview")

// function findUniq(arr) {
//     // Code here
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== arr[0]){
//             return arr[i]
//         }
//     }
// }

// console.log(findUniq([2, 2, 2, 1, 2]))

// function wordWidth(arr) {
//     // Code here
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length === 5){
//             return arr[i]; 
//         }
//     }
// }

// console.log(wordWidth(["qwert", "asd"]))

// expandedForm(12);  // Should return '10 + 2'
// expandedForm(90807);  // Should return '90000 + 800 + 7'

// function expandedForm(num) {
//     const numString  = num.toString().reverse();
//     const arraySum = numString.map((value, index) => value * Math.pow(10, index));
//     const remove0Value = arraySum.filter(Boolean);
//     return remove0Value.reverse().join(` + `);
//   }

// expandedForm(90807)

// function squareConcat(value) {
//     var results = [];

//     // Write your code so that “results” array is populated with all the squared digits.
//     let splitted = value.split("")
//     for(let i=0; i<splitted.length; i++){
//         results.push(parseInt(splitted[i] * splitted[i]))
//         // results.push(splitted[i])
//     }
//     console.log(results)
//     return results.join('');
// }

// squareConcat("12345")  // Should be  1 * 1; 2 * 2;  3 * 3; 4 * 4; 5* 5; => 1 4 9 16 25 =>  “1491625”

// Having 2 numbers as arguments, complete the "calcSum" function so that it returns the sum of all numbers between the 2 given arguments.

// do not update or modify in any way the following 5 lines of code
// const rl = require('readline').createInterface({ input: process.stdin });
// rl.on('line', (value) => {
//     const v = value.split(",");
//     return console.log(calcSum(Number(v[0]), Number(v[1])).toString()) 
// })

// Update only this function

//     function calcSum(a, b) {
//         var result = 0;
//         var bigger = a > b ? a : b;
//         var smaller = a > b ? b : a;
//         console.log('bigger',bigger)
//         console.log('smaller', smaller)
    
//         //   Update the for loop
//         for(let i=smaller; i<=bigger; i++){
//            result= result + i; 
//         }
//         // code here
//         console.log(result)
//         }

// calcSum(0, 3) // Should be:  0 + 1 + 2 + 3 = 6
// calcSum(-2, 3) // Should be: (-2) + (-1) + 0 + 1 + 2 + 3 = 3

// function transformToCamelCase(string) {
//     const wordArray = string.split('-');
//     let result = wordArray[0].toLowerCase();
//     console.log(result)
//     for (var i = 1; i < wordArray.length; i++) {
//         result = result + wordArray[i].charAt(0).toUpperCase() + wordArray[i].toLowerCase().slice(1);
//     }
//     return result;
// }

// console.log(transformToCamelCase('THE-random-TEST-example')); 

// sumToOneDigit(12345) => 1 + 2 + 3 + 4 + 5 = 15 => 1 + 5 => 6


// function sumToOneDigit(n) {
//     let arrNumber = n.toString().split("");
//     let sum = 0;
//     arrNumber.forEach((value) => (sum = value + sum)); 
//     if (sum.toString().length > 1) {
//       return sumToOneDigit(sum);
//     } else return sum;
//   }

//   console.log(sumToOneDigit(12345))

