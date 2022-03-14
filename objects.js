// Find the person who has many skills in the users object.
// Count logged in users, count users having greater than equal to 50 points from the following object.
// Find people who are MERN stack developer from the users object
// Set your name in the users object without modifying the original users object
// Get all keys or properties of users object
// Get all the values of users object

const users = {
    Alex: {
      email:  'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

let winner; 
let max = 0
  
for (const property in users) {
    if (users[property].skills.length > max) {
        max = users[property].skills.length;
        winner = property;
    }
}
// console.log(`The person that has the most skills is: ${winner}`);

function reducer(){
    const mostSkills = Object.keys(users).reduce(function getSkills(max, num){
        if(users[num].skills.length > max){
            return num[users].skills.length; 
        }
        return max; 
    })
    console.log(mostSkills); 
}
// reducer(); 

function countSkills(arr){ 
    let count = 0; 
    // for(let i = 0; i < arr.length; i++){
    //     console.log(i); 
    // }
    let skillsObj = {}; 
    for(const prop in users) {
        console.log(users[prop].skills)
        if(!skillsObj[users[prop].skills]){
            skillsObj[users[prop].skills] = 1; 
        }
        else{
            skillsObj[users[prop].skills] = skillsObj[users[prop].skills] + 1; 
        }
    }
    // console.log(skillsObj); 
}
// countSkills(users); 

function count50Plus(){
    let count = 0; 
    let newUsers = []; 
    for(const property in users){
        if(users[property].points >= 50 && users[property].isLoggedIn === true){
            count = count + 1; 
            newUsers.push(property);
        }
    }
    console.log(count); 
    console.log(newUsers); 
}
// count50Plus(); 

function count50Filter(){
    const newFilter = Object.keys(users).filter(function(el){
        if(users[el].points >=50 && users[el].isLoggedIn === true){
            return users[el]; 
        }
    })
    console.log(newFilter); 
}
// count50Filter(); 

function findMern(){
    let newMern = []; 
    for(const user in users){
        let mongo, express, react, node = false; 
        for(let i = 0; i < users[user].skills.length; i++){
            if(users[user].skills[i] === 'MongoDB'){
                mongo = true; 
            }
            if(users[user].skills[i] === 'Express'){
                express = true; 
            }
            if(users[user].skills[i] === 'React'){
                react = true; 
            }
            if(users[user].skills[i] === 'Node'){
                node = true; 
            }
        }
        if(mongo, express, react, node === true){
             newMern.push(user);
        }
    }
    console.log(newMern); 
}
// findMern(); 

function findMern2(){
    const mern = Object.keys(users).filter(function(el){
        if(users[el].skills.includes('MongoDB', 'Express', 'React', 'Node')){
            return users[el]; 
        }
    })
    // console.log(mern); 
}

// findMern2(); 

users.Andrei = {
    email: 'temp@email.com',
    skills: ['Javascript'],
    age: 31,
    isLoggedIn: true,
    points: 10
}
// console.log(users); 
// console.log(Object.keys(users)); 
// console.log(Object.values(users)); 


