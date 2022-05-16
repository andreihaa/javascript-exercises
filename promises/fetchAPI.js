import fetch from 'node-fetch'; 

const url = 'https://restcountries.com/v2/all'; 


// function countriesData(){
    
//     fetch(url)
//         .then(res => {
//             return res.json()
//         })
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// }

// // countriesData()


// const fetchData = async () =>{
//     try{
//         const response = await fetch(url); 
//         const countries = await response.json(); 
//         return countries; 
//     }
//     catch (err){
//         console.log(err)
//     }
// }

// fetchData()
//     .then(countries =>{
//         console.log(commonBorder(countries, 'ITA')) 
//     })
//     .catch(error =>{
//         console.log(error)
//     })

// function commonBorder(arr, neighbourCountry){
//     return arr.filter(country =>{
//         if(country.borders){
//             return country.borders.includes(neighbourCountry); 
//         }
//         else{
//             return false; 
//         }
//     })
//     .map(country =>{
//         return country.name
//     })
// }




// function fetchCountry(){
//     fetch(url)
//         .then((res) =>{
//             return res.json(); 
//         })
//         .then((data) =>{
//             console.log(data); 
//         })
//         .catch((error) => {
//             console.log(error); 
//         })
// }

// const newData = async function(){
//     try {
//         const response = await fetch(url); 
//         const countries = response.json(); 
//         return countries; 
//     }
//     catch(err){
//         console.log(err); 
//     }
// }

// newData()
//     .then(data => console.log(commonBorder(data, 'ITA')))

// function commonBorder(arr, neighbourCountry){
//     return arr.filter(country =>{
//         if(country.borders){
//             return country.borders.includes(neighbourCountry)
//         }
//         else{
//             return false; 
//         }
//     })
//     .map(country =>{
//         return country.name; 
//     })
// }


// function fetchAPI(){
//     fetch(url)
//         .then(res =>{
//             return res.json()
//         })
//         .then(data => console.log(data))
// }

// fetchAPI()


const fetchAsync = async function(){
    try{
        const response = await fetch(url);
        const data = await response; 
        console.log(data); 
    }
    catch(err){
        console.log(err)
    }
    
}

fetchAsync()