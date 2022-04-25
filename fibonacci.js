// let a = 0;
// let b = 1;
// let temp;

// for(let i =  0; i < 10; i++){
//     temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }

// 0 1 1 2 3 5 8 13 
// a b t 
//   a b t 


async function fiboPromise (num) {
    let a = 0;
    let b = 1;
    let temp;
    for(i = 0; i < num; i++){
        temp = await nextFibo(a, b);
        console.log(temp);
        a = b;
        b = temp;
    }
}

function nextFibo (a, b){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(a + b)
        }, 1000);
    })
}

fiboPromise(10);



// function fibo(num){
//     let a = 0; 
//     let b = 1;
//     let sum = 0;  
//     while(sum < num){
//         sum = a + b; 
//         console.log(sum); 
//         a = b; 
//         b = sum; 
//     }
// }

// fibo(100); 


