// 0 - 100 iterat 
// daca % 5 fizz
// daca % 3 buzz
// daca % 15 fizzbuzz

async function fizzBuzz(num){
    for(let i = 0; i < num; i++){
        console.log(i); 
        const [with3, with5] = await Promise.all([isDivisibleWith3(i),isDivisibleWith5(i)])
        
        const with3And5 = with3 && with5;
        if(with3And5){
            console.log('fizzBuzz')
        }
        // await method
        // const with3 = await isDivisibleWith3(i)
        else if(with3){
            console.log('buzz')
        }
        // await method
        // const with5 = await isDivisibleWith5(i)

        else if(with5){
            console.log('fizz')
        }
        

        
        // await isDivisibleWith5(i)
            // .then((res) =>{
            //     if(res){
            //         console.log(i, 'buzz')
            //     }
            // })
        // await isDivisibleWith5(i)
        //     .then((res) =>{
        //         if(res){
        //             console.log(i, 'fizz')
        //         }
        // })
        // await isDivisibleWith3(i)
        //     .then((res) =>{
        //         if(res){
        //             isDivisibleWith5(i)
        //                 .then((res) =>{
        //                     if(res){
        //                         console.log(i, 'fizzbuzz')
        //                     }
        //             })
        //         }
        //     })
    }
}

fizzBuzz(100); 

function isDivisibleWith3(num){
    return new Promise((res, rej) => {
        setTimeout(() =>{
            if(num % 3 === 0){
                res(true);
            }
            else{
                res(false); 
            }
        }, 1000)
    })
}

function isDivisibleWith5(num){
    return new Promise((res, rej) => {
        setTimeout(() =>{
            if(num % 5 === 0){
                res(true);
            }
            else{
                res(false); 
            }
        }, 1000)
    })
}