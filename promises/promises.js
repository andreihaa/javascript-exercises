
async function run(){
    console.log('start');
    await f1((param) => {
        console.log(param)
    });
    f1(()=>{
        console.log('end')
    });
}

// run();

function f1 (f2){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            f2();
            res();
        }, 1000)
    })
}


async function print (){
    for(let i = 0; i < 10; i ++){
        await f1(()=>{
            console.log(i);
        })
    }
}
// print();

async function sum (){
    let count = 0;
    for(let i = 0; i < 10; i ++){
        await f1(()=>{
            count = count + i;
            console.log(count);
        })
    }
}
sum();

// fibonacci sequence - de facut 


