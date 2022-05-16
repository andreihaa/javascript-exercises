function recursive(num1, num2){
    console.log(num1)
    if(num2 > 100){
       return num1; 
    }
    return recursive(num2, num1 + num2)
}

recursive(0,1); 