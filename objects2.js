// let kitten = {
//     ageMonths: 3,
//     isFemale: true,
//     furColour: "brown",
//   };
//   kitten.name = 'Gilbert'; 

//   console.log(kitten.ageMonths);
//   console.log(kitten.isFemale);
//   console.log(kitten.furColour); 
//   console.log(kitten.name); 


//   let phone = {
//     brand:'iPhone',
//     model: 'iPhone X',
//     launchYear: 2017,
//     'is Unlocked': true
//   };

// let phoneBrand = phone.brand;
// let phoneLaunchYear = phone['launchYear'];

// console.log(phoneBrand);
// console.log(phoneLaunchYear);
// console.log(phone.model);

// let dog = {
//     name: "Billy",
//     wantsToPlay: false,
//   };

// dog.name = 'Rex';
// dog.wantsToPlay = true; 

// console.log(dog.name);
// console.log(dog.wantsToPlay);

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };

//   house.address = '51 Berkley Road';
//   house.previousOwners = ['Brian M.', 'Fiona S.'];
//   house.currentOwner.lastName = 'Montgomery'; 

// // - change the address of "house" to '51 Berkley Road'
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// // - change the last name of the current owner of "house" to "Montgomery"

// console.log(
//     `Expected result: 51 Berkley Road. Actual result: ${house.address}`
//   );
//   console.log(
//     `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
//   );
//   console.log(
//     `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
//   );

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };
  
//   let newCurrentOwner = {
//     firstName: "Georgina",
//     lastName: "Hernandez",
//   };

// // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// // - from the list of previous owners, replace only "John A." with "Stephen B."
// // - give the house a new property called 'isForSale' with the value 'false'

// console.log(
//     `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//       house.currentOwner === newCurrentOwner
//     }`
//   );
//   console.log(
//     `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
//   );
//   console.log(`Expected result: false. Actual result: ${house.isForSale}`);

// let kinningParkHouse = {
//     address: "1 Kinning Park",
//     price: 180000,
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//       email: "margaret@fake-emails.com",
//     },
//   };
  
//   let parkAvenueHouse = {
//     address: "50 Park Avenue",
//     price: 195000,
//     currentOwner: {
//       firstName: "Marie",
//       lastName: "McDonald",
//       email: "marie.m@real-emails.com",
//     },
//   };

//   // returns the full name (first name + last name) of the owner of the house
// function getOwnerFullName(house) {
//     let kinningFirst = kinningParkHouse.currentOwner.firstName; 
//     let kinningLast = kinningParkHouse.currentOwner.lastName;
//     return {
//         firstName: house.currentOwner.firstName,
//         lastName: house.currentOwner.lastName
//     }
// }
// console.log(getOwnerFullName(kinningParkHouse));


// // returns an array of the owners' email addresses of the two houses
// function getEmailAddresses(house1, house2) {
//     return [house1.currentOwner.email, house2.currentOwner.email]; 
// }

// // returns the address for the cheapest house out of the two
// function getCheapestAddress(house1, house2) {
//     if(house1.price < house2.price){
//         return house1.address; 
//     }
//     else{
//         return house2.address; 
//     }
// }
// console.log(
//   `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
//     kinningParkHouse
//   )}`
// );
// console.log(
//   `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
//     kinningParkHouse,
//     parkAvenueHouse
//   )}`
// );
// console.log(
//   `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
//     parkAvenueHouse,
//     kinningParkHouse
//   )}`
// );

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };
  
//   let newCurrentOwner = {
//     firstName: "Georgina",
//     lastName: "Hernandez",
//   };

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

// house.currentOwner = newCurrentOwner; 
// house.previousOwners = ['Claire M.', 'Stephen B.'];
// house.isForSale = false; 
// console.log(house); 

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
// console.log(
//     `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//       house.currentOwner === newCurrentOwner
//     }`
//   );
//   console.log(
//     `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
//   );
//   console.log(`Expected result: false. Actual result: ${house.isForSale}`);


/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

// let person = {
//   name: "Alice",
//   age: 25,
//   greet: function(){
//     return 'Hello everybody'; 
//   },
//   sayName: function(){
//     return `My name is ${person.name}`; 
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//   `Expected result: Hello everybody. Actual result: ${person.greet()}`
// );
// console.log(
//   `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
// );

/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

// let person = {
//   name: "Alice",
//   age: 25,
//   currentAddress: "Glasgow",
//   changeAddress: function (newAddress) {
//       person.currentAddress = newAddress;
//   },
//   celebrateBirthday: function() {
//       this.age = this.age + 1;
//   }
// };


// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.changeAddress("Edinburgh");
// console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

// person.celebrateBirthday();
// console.log(`Expected result: 26. Actual result: ${person.age}`);

/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

// let person = {
//   name: "Alice",
//   friends: ["John", "Nina"],
//   makeFriend: function (friend) {
//     person.friends = person.friends + ',' + friend; 
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.makeFriend("Bob");

// console.log(
//   `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// );

/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

// let coffeeMachine = {
//   brand: "Super Coffee",
//   prices: {
//     cappuccino: 2.4,
//     blackCoffee: 1.5,
//     flatWhite: 3.0,
//   },
//   insertedAmount: 0,
//   insertMoney: function (amount) {
//     coffeeMachine.insertedAmount = amount; 
//   },
//   getCoffee: function (coffee) {
//     if(coffee === 'cappuccino' && coffeeMachine.insertedAmount >= coffeeMachine.prices.cappuccino ){
//       return `Please take your ${coffee}`;
//     }
//     else if(coffee === 'blackCoffee' && coffeeMachine.insertedAmount >= coffeeMachine.prices.blackCoffee ){
//       return `Please take your ${coffee}`;
//     }
//     else if(coffee === 'flatWhite' && coffeeMachine.insertedAmount >= coffeeMachine.prices.flatWhite){
//       return `Please take your ${coffee}`;
//     }
//     else{
//       return `Sorry, you don't have enough money for a ${coffee}`;
//     }
//   },
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// coffeeMachine.insertMoney(2.4);
// console.log(
//   `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
//     "cappuccino"
//   )}`
// );

// coffeeMachine.insertMoney(1.5);
// console.log(
//   `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
//     "blackCoffee"
//   )}`
// );

// coffeeMachine.insertMoney(4.0);
// console.log(
//   `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );

// coffeeMachine.insertMoney(2.4);
// console.log(
//   `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );

/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

// let person1 = {
//   name: "Alice",
//   age: 25
// };

// let person2 = {
//   name: "Bob",
//   age: 30
// };

// let person3 = {
//   name: "John",
//   age: 20
// };

// /*
// DO NOT EDIT ANYTHING ABOVE THIS LINE
// WRITE YOUR CODE BELOW
// */


// let persons = [person1, person2, person3]; 
// console.log(persons); 

// let personNames = persons.map(function getPeronsNames(p){
//   return p.name; 
// }); 
// console.log(personNames); 

// let personsYoungerThan28YearsOld = persons.filter(function youngerThan(x){
//   return x.age < 28; 
//   }); 

// console.log(personsYoungerThan28YearsOld); 




// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log("Question 1: array defined with 3 persons -> ",
//   (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');

// console.log("Question 2: array containing the person names -> ",
//   (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');

// console.log("Question 3: array containing the persons younger than 28 years old -> ",
//   (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');


/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


// let destination1 = {
//   destinationName: "Edinburgh",
//   distanceKms: 80,
//   transportations: ["car", "bus", "train"]
// };

// let destination2 = {
//   destinationName: "London",
//   distanceKms: 650,
//   transportations: ["car", "bus", "train"]
// };

// let destination3 = {
//   destinationName: "Paris",
//   distanceKms: 900,
//   transportations: ["train", "plane"]
// };

// let destination4 = {
//   destinationName: "Dublin",
//   distanceKms: 350,
//   transportations: ["plane", "ferry"]
// };

// let travelDestinations = [destination1, destination2, destination3, destination4];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


// let destinationNamesWithin500Kms = travelDestinations.filter(function destinationNames(destination){
//     return destination.distanceKms < 500; 
// })
// console.log(destinationNamesWithin500Kms); 

// let names = destinationNamesWithin500Kms.map(function getName(x){
//   return x.destinationName; 
// }); 
// console.log(names); 

// let destinationNameReachableByFerry = travelDestinations.filter(function ferry(destination){
//   return destination.transportations.includes('ferry');
//   }); 

// let ferryName = destinationNameReachableByFerry.map (function getFerryName(x){
//   return x.destinationName; 
// })
// console.log(ferryName);

// let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(function moreThan300(x){
//   return x.distanceKms < 300 && x.transportations.includes('train'); 
// })
// console.log(destinationNamesMoreThan300KmsAwayByTrain);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
// console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
// console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);


/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats,
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
// console.log(
//   `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
// );

// let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
//   "salad"
// );
// console.log(
//   `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
// );

// let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
//   "center"
// );
// console.log(
//   `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
// );

/*

Return the keys and values of the following object

*/

// let capitalCities = {
//   scotland: 'Edinburgh',
//   kenya: 'Nairobi',
//   australia: 'Canberra',
//   canada: 'Ottawa'
// };

// let highScores = {
//   55: 'Alistair',
//   100: 'David',
//   89: 'Hannah',
//   34: ['Sergi', 'Frank',]
// };

// // ONLY EDIT BELOW HERE

// let capitalCitiesKeys = Object.keys(capitalCities); 
// let highScoresKeys = Object.keys(highScores);
// let capitalCitiesValues = Object.values(capitalCities);
// let highScoresValues = Object.values(highScores);

// ONLY EDIT ABOVE HERE

// console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

// console.log(highScoresKeys)
// prints ['34, '55', '89', '100']

// console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

// console.log(highScoresValues)
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']

/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

// let mentorsAges = {
//   james: 29,
//   JOSH: 35,
//   JAMIE: 25,
//   Mozafar: 30
// };

// ONLY EDIT BELOW THIS LINE

// let mentorsNames = Object.keys(mentorsAges);
// console.log(mentorsNames);
// let mentorsNamedUppercased = mentorsNames.map(function upperCased(x){
//   return x.toUpperCase(); 
// });

// ONLY EDIT ABOVE THIS LINE

// console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

// let storeBranches = {
//   glasgow: {
//     manager: "Andrew",
//     assistant: "Laura",
//     interns: {
//       head_intern: "Mozafar",
//       intern: "James",
//     },
//   },

//   edinburgh: {
//     director: "Kelly",
//     manager: "Sally",
//     assistant: "Derek",
//     interns: {
//       head_intern: "John",
//       intern: "Sarah",
//     },
//   },
// };

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
// console.log(Object.keys(storeBranches));

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
// console.log(Object.keys(storeBranches.glasgow));

// # 3
// prints [ 'head_intern', 'intern' ]
// console.log(Object.keys(storeBranches.edinburgh.interns));

// ONLY EDIT ABOVE THIS LINEp-------


// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

// const studentGrades = {
//   tom: 20,
//   george: 17,
//   abdul: 19,
// };

// for(let name in studentGrades){
//   if(studentGrades[name] > 18){
//   console.log(`${name} - ${studentGrades[name]}`); 
//   }
// }

// Prints
// TOM - 20
// ABDUL - 19

const numbers = [1, 2, 3, 4, 5];
const nums = [3,6,9,12,15,18];
const numbs = [4,6,8,10,12,14,16]

numbers.forEach(function incrementOne(number){
  number = number + 1; 
  console.log('this is incrementOne:', number);
});
numbers.filter(function isOddNumber(n){
  if(n % 2 === 0){
    console.log('this is oddNumber:', n); 
  }
})

nums.forEach(function increment(num){
  num = num + 1;
  console.log('this is increment:', num); 
});

nums.filter(function isEven(n){
  if(n % 2 !== 0){
    console.log('this is even nums of n:', n); 
  }
})

numbers.forEach(function multiplyTwo(number){
  number = number*2;
  console.log('this is multiplyTwo:', number); 
})

numbs.forEach(function divideTwo(n){
  n = n / 2;
  console.log('this is divideTwo:', n);  
})
