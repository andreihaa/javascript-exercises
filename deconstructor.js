

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// }

// // const a = obj.a; 
// // const b = obj.b;
// // const c = obj.c; 

// const {a, b, c} = obj; 

// function test(obj) {
//     const {a, b, c} = obj 
//     console.log(a, b, c); 
// }

// function test2 ({a,b,c}) {
//     console.log(a, b, c)
// }

// const arr = [1, 2, 3]; 
// const [a, b] = arr; 

// Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total). 
// The key 'sale' equals the calculated sale price based on the original price and the discount. 
// The key 'total' equals the computed total based on stock, the original price and the discount. 
// You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. 
// The default value would be 0.0.

// const sales = [
//     { item: 'PS4 Pro', stock: 3, original: 399.99 },
//     { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//     { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//     { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//     { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
//   ];

//   function calculateSalesTotals(sales){
//     let updatedSales = sales.map(sale=>{
//       let {original, stock, discount=0.0} = sale;
//       sale['sale'] = original - original * discount;
//       sale['total'] = sale.sale*sale.stock;
//       return sale;
//     });
//     return updatedSales;
//   }


const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const [player1, player2, player3, player4] = scores; 
// console.log(player1);
// console.log(player2);
// console.log(player3); 
// console.log(player4); 

const[first, ...everyoneElse] = scores; 
// console.log(first); 
// console.log(everyoneElse); 

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoLt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1980,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const {email, firstName, lastName, bio} = user;
// console.log(email);
// console.log(firstName); 
// console.log(lastName);
// console.log(bio); 

// function fullName(user) {
//     const {firstName, lastName} = user; 
//     return `${firstName}, ${lastName}`; 
// }

//destructuring inside param of the function

function fullName({firstName, lastName = 'not provided'}){
    return `${firstName}, ${lastName}`; 
}

const {born: birthYear, died: deathYear = 'N/A'} = user; 
// console.log(birthYear);
// console.log(deathYear); 
// N/A will not be used because it already has a value. 
// We set the default value if we don't know that data. 
// If the object/array has the value, the default won't be used.  

// const {email, firstName, lastName, died = 'N/A'} = user2; 


const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];

function calculatedSales(sales){
    const updatedSales = sales.map(sale => {
       let {stock, original, discount = 0.0} = sale;
    //    sale['sale'] = original - original * discount; 
    //    sale['total'] = sale.sale * sale.stock;  
       return sale; 
    })
    return updatedSales
    // console.log(updatedSales); 
}

  function calculateSalesTotals(sales){
    let updatedSales = sales.map(item => {
      let {original, stock, discount=0.0} = item;
      item['sale'] = original - original * discount;
      item['total'] = item.sale * item.stock;
      return item;
    });
    return updatedSales;
  }

// console.log('calculated sales total:',calculateSalesTotals(sales)); 
// console.log('calculated sales:',calculatedSales(sales)); 

//de ce item['sale']?
//cum stie ca vreau obiect? unde am definit obiectul? 
//cum acceseaza obiectul in timp ce se creeaza? sale.sale * sale.stock? 
//de ce continua sa imi apara item-ul, dupa map, tinand cont ca eu am facut destructure pe "original". "stock". "discount"? 
//de ce nu am discount-ul, tinand cont ca am pus default discount 0.0? 


const myClasses = {
    firstHour: "Ethics",
    secondHour: "Programming",
    thirdHour: "Biology"
};

function goToSecondClass({secondHour}){
    // {secondHour} = myClasses; 
    // console.log(`go to ${secondHour} class`)
}

// goToSecondClass(myClasses); 

let colors = ["white", "blue", "yellow", "black", "red", "green"];

let [firstColor, secondColor, ...otherColors] = colors; 
// console.log(firstColor); 
// console.log(secondColor); 
// console.log(otherColors); 

//deconstructor param 

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}

// const skills = person.skills;
// const formattedSkills = skills.slice(0, -1).join(', ');
// console.log(formattedSkills);

const getPersonInfo = ({firstName, lastName, age, country, job, skills, languages}) =>{
  const formatSkills = skills.join(', ')
  const formatLanguage = languages.join(', ')
  console.log(`the person's name is ${firstName + ' ' + lastName}, the person is ${age} years old, lives in ${country} and works as a ${job}.`)
}
// getPersonInfo(person)

// deconstructor iteratation

const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]

for(const {task,time,completed} of todoList){
  // console.log(task,time,completed)
}

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds];
// console.log(wholeNumbers); 

// const data = {
//   name:'Asabeneh',
//   title:'Programmer',
//   country:'Finland',
//   city:'Helsinki'
// }

// const copiedUser ={...data}; 
// console.log(copiedUser)

