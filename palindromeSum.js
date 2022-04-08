//functie care dupa o secunda iti returneaza suma intre numar si opusul lui 
//o alta functie care folosind suma asta face 

const number = [123, 456, 789]; 

function reversedSum(num){
    return new Promise((res) => {
        setTimeout(() => {let newNum = 0; 
            let num2 = num; 
            while(num2 !== 0){
                const temp = num2 % 10; 
                num2 = Math.floor(num2/10); 
                newNum = newNum * 10 + temp;
            }
            let sum = newNum + num; 
            res(sum)
        }, 1000)
    })
    
}

// reversedSum(number).then((el) => console.log(el))

async function totalSum(arr){
    let sum = 0; 
    for(el of arr){
      let promise = await reversedSum(el)  
      console.log(promise)
      sum = sum + promise; 
    }
    return sum; 
}

totalSum(number).then((el) => console.log(el))

//calendar app 