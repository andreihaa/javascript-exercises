function reverse(number) { 
    let arr  = []; 

    let lastNumber = number % 10; 
    let newNumber = Math.floor(number / 10); 

    while (lastNumber > 0) {
        arr.push(lastNumber);
        lastNumber = newNumber % 10;
        newNumber = Math.floor(newNumber / 10);
    }
    return arr;
}

function compose(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++){ 
        let calc = arr[i] * powerOf10(arr.length - i - 1);
        sum = calc + sum;
    }

    function powerOf10(i) {
        let power = 1; 
        for  (let j = 0; j < i; j++){
            power = power * 10; 
        }
        return power; 
    }
    return sum; 
}


function isPalindrome(num) {
    const c = compose(reverse(num)); 
    if (c === num) {
        return true;
    } else {
        return false; 
    }
}
console.log(isPalindrome(52125)); 
console.log(isPalindrome(521452)); 