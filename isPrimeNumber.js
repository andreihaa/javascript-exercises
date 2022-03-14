function primeNumber(num){
    const lesserPrimes = extractPrime(num); 
    for(let i = 0; i < lesserPrimes.length; i++){
        if(num % lesserPrimes[i] === 0){
            return false; 
        }
    }
    return true; 
}

// console.log(primeNumber(51))

function extractPrime(num){
    const prime = []; 
    for(let i = num; i > 1; i--){
        if(primeNumber(i)){
            prime.push(i); 
        }
    }
    return prime; 
}

// console.log(extractPrime(20)); 

