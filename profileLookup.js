//We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// Setup
const contacts = [
    {
        firstName: "George",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza"],
      },
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid", "Coding"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i=0; i<contacts.length; i++){
        if(name === contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }
            else{
                return 'No such contact'; 
            }
        }
    }
    return 'No such property';
    // Only change code above this line
}
// lookUpProfile("Akira", "likes");

function lookUpProfile2(name, prop){
    function findContact(element){
        return element.firstName === name; 
    }
    function filterContact(element){
        return element.hasOwnProperty(prop); 
    }
    const filteredContacts = contacts.filter(filterContact); 
    const contact = filteredContacts.find(findContact);
    console.log(contact);
}
// lookUpProfile2("Akira", "likes");

function findPizza(){
    const pizzaLovers = contacts.filter(function (element){
        return element.likes.includes('Pizza'); 
    })
    return pizzaLovers; 
}
// console.log(findPizza()); 

//last name Laine + likes coding

function lookUpProfile3(){
    const likesCoding = contacts.filter(function (element){
        return element.likes.includes('Coding'); 
    });
    const namedLaine = likesCoding.filter(function (element){
        return element.lastName === 'Laine'; 
    })
    return namedLaine; 
}

// console.log(lookUpProfile3()); 


function transformLastName(newName){
    const newLastName = contacts.map(function (element){
        element.lastName = newName; 
       return element; 
    })
    return newLastName; 
}

// console.log(transformLastName('X')); 

//fiecare Laine - likes Hamburger 

function lookUpProfile4(name){
    const calledLaine = contacts.filter(function (element){
        return element.lastName === name; 
    })
    const likesHamburger = calledLaine.map(function (element){
        element.likes.push('Hamburger'); 
        return element; 
    })
    return likesHamburger; 
}
// console.log(lookUpProfile4('Laine'));

//string compus din firstName + LastName 

function getFullName(){
    const fullNames = contacts.map(function (element){
        return element.firstName.concat(' ').concat(element.lastName); 
    })
    return fullNames; 
}
// console.log(getFullName());

//print number of contact + firstName

function getNumber (){
    const numbers = contacts.forEach(function (element){
        console.log(element.number + ' ' + element.firstName); 
    })
    return numbers; 
}

// console.log('result:', getNumber()); 