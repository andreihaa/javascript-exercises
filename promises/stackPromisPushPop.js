//functie care sa returneze add() si functie care sa returneze max()

function getStack(){
    const arr = [];
    let max = 0; 
    const maxArr =[]
    function addOne(element){
        return new Promise((res, rej) => {
            setTimeout(() =>{
                arr.push(element)
                if(element > max){
                    max = element;
                    maxArr.push(element) 
                }
                res(arr);
            },1000)
        })
    }
    function obtainMax(){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                res(max)
            },1000)
        })
    }
    function deleteOne(){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                const element = arr.pop()
                console.log('this is popped element', element)
                if(element === maxArr[maxArr.length-1]){
                    maxArr.pop()
                }
                if(max === element){
                    max = maxArr[maxArr.length-1]
                }
                res({ arr, maxArr, max });
            },1000)
        })
    }
    addOne(1)
        .then(() =>{
            console.log(arr); 
        })
    addOne(3)
        .then(() =>{
            console.log(arr); 
        })
    addOne(6)
        .then(() =>{
            console.log(arr); 
        })
    addOne(2)
        .then(() =>{
            console.log(arr); 
        })
    addOne(4)
        .then(() =>{
            console.log(arr); 
        })
    obtainMax()
        .then(() =>{
            console.log(max); 
            console.log(maxArr);
    })
    deleteOne()
        .then(() =>{
            console.log('this is max:', max); 
            console.log('this is maxArr:', maxArr);
            console.log('this is arr:', arr)
    })
    deleteOne()
        .then(() =>{
            console.log('this is max:', max); 
            console.log('this is maxArr:', maxArr);
            console.log('this is arr:', arr)
    })
    deleteOne()
        .then(() =>{
            console.log('this is max:', max); 
            console.log('this is maxArr:', maxArr);
            console.log('this is arr:', arr)
    })
}



getStack();