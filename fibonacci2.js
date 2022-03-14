
async function fibonacci(num){
    let a = 0;
    let b = 1; 
    let t = a + b; 
    while(t < 100){
        console.log(t); 
        a = b;
        b = t; 
        t = a+b;
        await new Promise ((res,rej) =>{
            setTimeout(() =>{
                res()
            },1000)
        })
    }
}

fibonacci(100)



