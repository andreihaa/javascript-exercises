function stackPromise(){
    const arr = []
    let max = 0; 
    function addElementOneSec(element){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                arr.push(element);
                if(element > max){
                    max = element; 
                }
                res(arr); 
            },1000)
        })
    }

    function getMax(){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                res(max)
            })
        })
    }
    ///pop element 
    
    async function run(){
        await addElementOneSec(1)
        console.log(arr);
        await addElementOneSec(2)
        console.log(arr);
        await addElementOneSec(3)
        console.log(arr);
        console.log(await getMax());
    }

    run()

    // addElementOneSec(1)
    //     .then(() => {
    //         console.log(arr);
    //         return addElementOneSec(2)
    //     })
    //     .then(() =>{
    //         console.log(arr)
    //         return addElementOneSec(3)
    //     })
    //     .then(() =>{
    //         console.log(arr); 
    //     })
    //     .then(() =>{
    //         return getMax()
    //     })
    //     .then((el) => {
    //         console.log(el); 
    //     })
}

stackPromise();

// function getMax(arr){
//     let max = 0; 
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] > max ){
//             max = arr[i];
//         }
//     }
//     console.log(max)
// }

// getMax([1,3,5,6,7,9,3]); 