function getMax (arr){
    return new Promise((res, rej) => {
        setTimeout(() =>  {
            let max = 0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > max){
                    max = arr[i];
                }
            }
            res(max);
        },1000)
    })
}

getMax([0,6,9,1,3,12,11,16,7]).then((el) => console.log(el)).then(() => console.log('finish'));