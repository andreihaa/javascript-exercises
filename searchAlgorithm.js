// const obj = { a: 1, b: 2}
// const indexed = {
//     'hello':  [1],
//     'buddy':  [1],
//     'landed':  [2, 3],
//     'nyc':  [2, 3],
//     'in': [3]
//   }
// {id: 4, text: "hello nyc all"};


// const tweets = [
//     { id: 1, text: "hello buddy" },
//     { id: 2, text: "landed nyc" },
//     { id: 3, text: "landed in nyc" },
//   ]

class db {
    indexed = {}; 
    constructor(){

    }
    add(tweet){
        const split = tweet.text.split(' ');    
        //split = ['hello', 'buddy']; 
        for(let w of split){
            // w = 'hello';
            // w = 'buddy'; 
            if(this.indexed[w]){
                // indexed['hello'] = [1];
                this.indexed[w].push(tweet.id); 
            }
            else {
                this.indexed[w] = [tweet.id];  
            }
        }
    }
    search(query){
        //query = "old friend"
        const split = query.split(' '); 
        //split = ['old', 'friend'];
        
        const transformed = split.map(word => this.indexed[word]); 
        return transformed; 
    }
}

const var1 = new db(); 
var1.add({id: 1, text: 'hello buddy friend'});
var1.add({id: 2, text: 'hello friend'});
var1.add({id: 3, text: 'goodbye old friend'}); 
console.log(var1.search('old friend'));

function (arr){
    for(let newArr of arr){
        console.log(newArr); 
    }
    
}

// console.log(var1.indexed);  

// function search (word) {
//     let newTweets = []; 
//     for(let w of tweets) {
//         if(w.text.includes(word)){
//             newTweets.push(w.id); 
//         }
//     }
//     return newTweets; 
// }

// console.log(search('nyc')); 

// functie care sa faca intersectie intre arrays. 
// daca avem un array [1,2,3], unul [2,3], unul [3], intersectia este [3].