// o functie care returneaza un array de functii care fac suma(add 1/ add 10/add 30)
// o functie care implementeaza un countdown. bagi un parametru de 1 minut, printeaza fiecare secunda pe ecran si se opreste cand ajunge la zero

function createAdd(x){
    return function(y){
            return x + y; 
    }
}

function createAdd2(x){
    return function(y){
        return function(z){
            return x + y + z; 
        }
    }
}

// const add5 = createAdd(5);
// // console.log(add5(3)); 
// const add = createAdd2(1)(10)(30);
// console.log(add); 

function createAdders(number){
    const newArr = []; 
    for(let i = 0; i < number; i++){
        newArr.push(function(x){
            return x + i; 
        })
    }
    return newArr; 
}
// const newAdders =  createAdders(10); 
// console.log(newAdders[3](1)); 

// const obj = {
//     a: function(string){
//         return 'a'.concat(string); 
//     },
//     b: ,
//     c: 
// }

function concatArr (arr){
    const newObj = {};
    for(let i = 0; i < arr.length; i++){
        newObj[arr[i]] = function(string){
                return arr[i].concat(string)
        }
    }
    return newObj; 
}

// const concatArrToObj = concatArr(['a', 'b', 'c']); 
// console.log(concatArrToObj['b']('and')); 



function countDown(param){
    let countDown = param;
    const interval = setInterval(function() {
        console.log(countDown); 
       countDown = countDown - 1; 
       if(countDown === 0){
           clearInterval(interval);
       }
    }, 1000);
    return countDown; 
}
// countDown(5); 



function cookCake(ingredient){
    console.log(`${ingredient} cake: add in the batter the ${ingredient}`);
    function ovenTime(time, temperature){
        console.log(`we put the ${ingredient} batter in the oven for ${time} minutes at ${temperature} degrees`)
    }
    return ovenTime; 
}

// const chocolateCake = cookCake('chocolate');  
// chocolateCake(90, 270); 
// const carrotCake = cookCake('carrot');
// carrotCake(60,250); 


// Create a personAccount out function. 
// It has firstname, lastname, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

//return two functions: name and location + age over 10 years old 
// key1 - name and location
// key2 - over 10 years old

function person (name, age, location){
    return {
        key1: function(){
            return name.concat(' ').concat(location);
        },
        key2: function(x){
            return x + age; 
        }
    }
}

const newPerson = person('Mircea', 32, 'Arad'); 

// console.log(newPerson.key1()); 
// console.log(newPerson.key2(10)); 

// Write a function called specialMultiply which accepts two parameters. 
// If the function is passed both parameters, it should return the product of the two. 
// If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. 
// You will have to use closure and arguments to solve this.

function guessNumber(){
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber); 
    return {
        guess: function(param){
            if(param > randomNumber){
                console.log('too high');
            }
            else if(param < randomNumber){
                console.log('too low');
            }
            else{
                console.log('correct'); 
            }
        }
    }
}

const newNumber = guessNumber();
// newNumber.guess(5); 
// newNumber.guess(3); 
// newNumber.guess(1); 
// newNumber.guess(7); 
// newNumber.guess(8);
// newNumber.guess(9); 
// newNumber.guess(2); 
// newNumber.guess(6);  

function startGuessing(param){
    setInterval(function(){
        const newNumber = Math.floor(Math.random() * 10);
        console.log('guessing: ', newNumber); 
        param.guess(newNumber); 
    }, 1000)
}
startGuessing(newNumber);