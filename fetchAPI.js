// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json()
// })
// .then(data => {
//     console.log("DATA PARSED....")
//     console.log(data.ticker.price)
// })
// .catch(e => {
//     console.log("OH NO, ERROR");
// })


//fetch method 

// const fetchBitcoinPrice = async () => {
//     try{
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     console.log(res)
//     const data = await res.json();
//     console.log(data.ticker.price)
//     }
//     catch(e) {
//         console.log("SOMETHING WENT WRONG")
//     }
// }

//axios method

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR", err)
//     })

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }
//     catch(e){
//         console.log("ERROR", e)
//     }
// }


const fetDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke; 
    }
    catch (e){
        return "NO JOKES AVAILABLE! SORRY"
    }
    
}

// json parse vs axios?
// header in json - 