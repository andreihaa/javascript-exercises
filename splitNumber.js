const number = 123456; 

// console.log(number % 10);
// console.log(Math.floor(number / 10)); 
let lastNumber = number % 10; 
let newNumber = Math.floor(number / 10); 

console.log(lastNumber);
// console.log(newNumber);
// console.log('______________________')
let n =[];

while (lastNumber > 1) {
    lastNumber = newNumber % 10;
    newNumber = Math.floor(newNumber / 10);
    console.log(lastNumber);
}

// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 


// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 


// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 


// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 


// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 

// console.log(lastNumber); 

// lastNumber = newNumber % 10; 
// newNumber = Math.floor(newNumber / 10); 

// console.log(lastNumber); 



// let n = 0;

// while (n = -1) {
//   n--;
//     lastNumber = newNumber % 10; 
//     newNumber = Math.floor(newNumber / 10); 
// }

// console.log(n);