function factory (number) {
    return function (el) {
        return number + el; 
    }
}

const addOne = factory(1);
const addTwo = factory(2); 

console.log(addOne(5)); 
console.log(addTwo(4)); 

// function addOne (el) {
//     return 1 + el; 
// }


function caller (fn,param) {
    return fn(param); 
}

console.log(caller(addOne, 5)); 
