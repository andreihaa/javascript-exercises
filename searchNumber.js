let numbers = [1,2,3,4,5,6,7,8,9,10]; 

function search(numbers, number){
    for(let i=0; i<numbers.length; i++){
        if(number === numbers[i]){
            return true;
        }
    }
}

// console.log(search(numbers, 6));

function search2(number) {
    return numbers.includes(number); 
}

// console.log(search2(6)); 

function makeX(x){
    return function calculate(y){
        return x + y; 
    }
}

// let add3 = makeX(3); 
// let add5 = makeX(5); 

// console.log(add3(5)); 
// console.log(add5(8)); 


function makeClosure(a){
    return function create(b){
        return a+b;
    }
}

let closureA = makeClosure("y");
let closureB = makeClosure("e");

// console.log(closureA("eeeee"));
// console.log(closureB("u"))

// console.log(create("a"))

// numbers.length = 0; 
// console.log(numbers); 