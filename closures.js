function secretPassword(){
    let password = 'e8kb96y';
    return {
        guessPassword : function (guess){
            if(guess === password){
                return true;
            }
            else{
                return false; 
            }
        }
    }
}

const passwordGame = secretPassword(); 

// console.log(passwordGame.guessPassword('Welcome90')) //false
// console.log(passwordGame.guessPassword('e8kb96y')) //true


// function numberGenerator(){
//     let number = 10; 
//     function checkNumber(){
//         console.log(number)
//     }
//     num++; 
//     return checkNumber; 
// }

// let newNumber = numberGenerator();
// console.log(newNumber) // returns 11

let a = 2;
const sum = () => {
    let a = 5;
    return a + 20;
}
// console.log(a + sum());

const scopeCheck = () => {
    let localScope = "LOCAL";
    const innerScopeCheck = () => {
        let innerLocalScope = "INNER LOCAL";
        return globalScope + " { " + localScope + " { " + innerLocalScope + " }} ";
    }
    // console.log(innerLocalScope);
    return innerScopeCheck;
}
let globalScope = "GLOBAL";
//Function returning function
let fun1 = scopeCheck();
// console.log(fun1());


