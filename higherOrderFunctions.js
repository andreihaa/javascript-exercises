const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Turkmenistan']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0.5, 0.2, 1, 2, 3, 4, 0.1, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
  { product: 'tea2', price: {} },
]

// Explain the difference between forEach, map, filter, and reduce.
// Define a call function before you them in forEach, map, filter or reduce.
// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.
// Use map to create a new array by changing each country to uppercase in the countries array.
// Use map to create an array of countries length from countries array.
// Use map to create a new array by changing each number to square in the numbers array
// Use map to change to each name to uppercase in the names array
// Use map to map the products array to its corresponding prices.
// Use filter to filter out countries containing land.
// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
// Use filter to filter out country start with 'E';
// Use filter to filter out only prices with values.
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries ----????
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// array1.forEach(element => console.log(element))
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern
// (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function getCountry(){
    const country = countries.forEach(function (element){
        console.log(element); 
    });
}
// getCountry(); 

function getName(){
    const name = names.forEach(function(element){
        console.log(element); 
    })
}
// getName();

function getNumber(){
    const number = numbers.forEach(function (element){
        console.log(element); 
    })
}
// getNumber(); 

function uppercased(){
    const uppercase = countries.map(function(element){
        console.log(element.toUpperCase()); 
    })
}
// uppercased(); 

function countryLength(){
    const length = countries.map(function(element){
        console.log(element.length)
    })
}
// countryLength(); 

function toSquare(){
    const square = numbers.map(function (element){
        console.log(element ** 2);
    })
}
// toSquare(); 

function uppercased2(){
    const upper = names.map(function(el){
        console.log(el.toUpperCase());
    })
}
// uppercased2(); 

function containsLand (){
    const land = countries.filter(function (el){
        console.log(el.toLowerCase().includes('land')); 
    })
}
// containsLand(); 

function hasSixCharacters(){
    const sixChar = countries.filter(function(el){
        if(el.length === 6){
            return el; 
        }
    })
    console.log(sixChar); 
}
// hasSixCharacters(); 

function hasSixCharacters2(){
    const sixChar = countries.filter(function(el){
        if(el.length >= 6){
            return el; 
        }
    })
    console.log(sixChar); 
}
// hasSixCharacters2(); 

function firstLetter(){
    const letter = countries.filter(function(el){
        if(el[0] === 'I'){
            return el; 
        }
    })
    console.log(letter);
}
// firstLetter(); 

function priceWithValues(){
    const price = products.filter(function(el){
        if(isNaN(el.price)){
            return false; 
        }
    })
    console.log(price); 
}
// priceWithValues(); 

function reduceSum(arr){   
    const reducer = arr.reduce(function reducing(sum, number){
        return sum + number; 
    }, 0)
    console.log(reducer); 
}
// reduceSum(numbers); 

function reduceMin(arr){
    const reducer = arr.reduce(function reducing(min, number){
        if(number < min){
            return number; 
        }
        return min; 
    })
    console.log(reducer); 
}

// reduceMin(numbers); 

function reduceMax(arr){ 
    const reducer = arr.reduce(function reducing(max, number){
        if(number > max){
            return number; 
        }
        return max; 
    })
    console.log(reducer); 
}
// reduceMax(numbers); 

function someName(){
    const nameLength = names.some(function(el){
        if(el.length > 7){
            return el; 
        }
    })
    console.log(nameLength); 
}
// someName(); 

function evenNum(){
    const even = numbers.some(function(el){
        if(el % 2 === 0){
            return el; 
        }
    })
    console.log(even); 
}
// evenNum(); 

function everyCountry(){
    const land = countries.every(function(el){
        return el.toLowerCase().includes('land');
    })
    console.log(land); 
}
// everyCountry(); 

function findCountry(){
    const country = countries.find(function(el){
        return el.length === 6;
    })
    console.log(country); 
}
// findCountry(); 

function theIndex(){
    const index = countries.findIndex(function (el){
        return el.length === 6; 
    })
    console.log(index); 
}
// theIndex(); 

function findPosition(){
    const position = countries.findIndex(function(el){
        return el === 'Russia'; 
    })
    console.log(position); 
}
// findPosition(); 

function getPrices(){
    const prices = products.map(function (el){
        return el.price; 
    })
    console.log(prices); 
}
// getPrices(); 

function concatStrings(){
    const newString = countries.reduce(function(accumulator, currEl, idx){
        if(idx === 0){
            return currEl; 
        }
        if(idx === countries.length-1){
            return accumulator.concat(' and ').concat(currEl);
        }
        return accumulator.concat(', ').concat(currEl);
    },'')
    console.log(newString);
}

// concatStrings(); 

function priceWithValues(){
    const price = products.filter(function(el){
        return !isNaN(el.price); 
    })
    console.log(price); 
}
// priceWithValues(); 
function categorizeCountries(string){
    const categorize = countries.filter(function(el){
        return el.toLowerCase().includes(string); 
    })
    console.log(categorize); 
}
// categorizeCountries('land'); 
// categorizeCountries('island');
// categorizeCountries('stan');

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// Find the sum of price of products using only reduce reduce(callback))
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

function totalPrice(){
    const findPrice = products.map(function(el){
        return el.price; 
    }).filter(function(price) {
        return price > 0; 
    }).reduce(function(accumulator, number){
        return accumulator + number; 
    }, 0)
    console.log(`total price of products is ${findPrice}`); 
}
// totalPrice(); 

function priceReduce(){
    const price = Object.values(products).reduce(function(acc, num){
        // console.log(num.price); 
        if(num.price > 0){
            return acc + num.price;
        }
        else{
            return acc
        }
    }, 0)
    console.log(price);
}
// priceReduce(); 

