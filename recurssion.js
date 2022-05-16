// Your function should return an array.

// Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

// rangeOfNumbers should use recursion (call itself) to solve this challenge.

// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

// rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

// rangeOfNumbers(4, 4) should return [4].

function rangeOfNumbers(startNum, endNum) {
    return rec(startNum, endNum, [])
  }




function rec(startNum, endNum,arr){
    if(startNum !== endNum +1){
        return rec(startNum + 1, endNum, arr.concat(startNum))
    }
    return arr;
}

console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(6,9));