let number = 1234; 
let arr  = []; 

let lastNumber = number % 10; 
let newNumber = Math.floor(number / 10); 

console.log(lastNumber);
arr.push(lastNumber); 

while (lastNumber > 1) {
    lastNumber = newNumber % 10;
    newNumber = Math.floor(newNumber / 10);
    console.log(lastNumber); 
    arr.push(lastNumber);
    console.log(arr);
}




for (let i = 0; i < arr.length; i++ ) {
    console.log('________');
    console.log(arr[i]);
    console.log('________');
    
    for (let j = 0; j< arr.length; j++){
        console.log(arr[j]);
       
        if (arr[i] < arr[j]){
           aux = arr[i]; 
           arr[i]=arr[j];
           arr[j]=aux; 
        } 
    }
}