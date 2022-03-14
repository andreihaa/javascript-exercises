const arr = [8, 3, 2, 10, 5, 33, 22];

let aux; 
for (let i = 0; i < arr.length; i++ ) {
    console.log('________');
    console.log('arr[i]:',arr[i]);
    console.log('________');
    
    for (let j = 0; j< arr.length; j++){
        console.log('arr[j]:', arr[j]);
       
        if (arr[i] < arr[j]){
           aux = arr[i]; 
           arr[i]=arr[j];
           arr[j]=aux; 
        } 
    }
}
console.log(arr);
