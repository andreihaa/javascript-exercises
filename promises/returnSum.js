function sum(a,b){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(a + b)
        },500)
    })
}   


async function arrSum(arr){
    let count=0; 
    for(let i=0; i<arr.length; i++){
       count =  await sum(count, arr[i])
            
    }
    return count; 
}

arrSum([1,2,3,4,5,6,7,8,9,10])
    .then((res) => console.log(res))