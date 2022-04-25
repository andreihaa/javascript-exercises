import fetch from 'node-fetch'; 

const url = 'https://restcountries.com/v2/all'; 


function countriesData(){
    
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

// countriesData()


const fetchData = async () =>{
    try{
        const response = await fetch(url); 
        const countries = await response.json(); 
        return countries; 
    }
    catch (err){
        console.log(err)
    }
}

fetchData()
    .then(countries =>{
        console.log(commonBorder(countries, 'ITA')) 
    })
    .catch(error =>{
        console.log(error)
    })

function commonBorder(arr, neighbourCountry){
    return arr.filter(country =>{
        if(country.borders){
            return country.borders.includes(neighbourCountry); 
        }
        else{
            return false; 
        }
    })
    .map(country =>{
        return country.name
    })
}



