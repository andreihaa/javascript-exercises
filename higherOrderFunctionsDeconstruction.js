Array.prototype.myFilter = function personalFilter(func){
    const newArr = []; 
    for(let i=0; i<this.length; i++){
        if(func(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr; 
}

const filterArr = [1,2,3,4,5,6,7,8,9,9].myFilter(number =>{
    return number > 5; 
})

// console.log(filterArr)



//[1,2,3,4,5,6,7,8,9,9].filter(number =>{
//     return number > 5 
// })

Array.prototype.myMap = function personalMap(func){
    const newArr = []; 
    for(let i=0; i<this.length; i++){
        newArr.push(func(this[i]))
    }
    return newArr; 
}

const mapArr = [1,2,3,4,5,6,7,8,9,9].myMap(number =>{
    return number * 2; 
})

// console.log(mapArr); 

Array.prototype.myFind = function personalFind(func){
    for(let i=0; i<this.length; i++){
        if(func(this[i])){
            return this[i]
        }
    }
}

const findArr = [1,2,3,4,5,6,7,8,9,9].myFind(number =>{
    return number % 7 === 0; 
});

// console.log(findArr);

// [1,2,3,4,5,6,7,8,9,9].reduce((sum, num) =>{
//     console.log('this is sum:', sum);
//     console.log('this is num:', num); 
//     return sum + num; 
// }, 0)

Array.prototype.myReduce = function myReduce(func, initialValue){
    let acc = initialValue; 
    for(let i=0; i<this.length; i++){
       acc = func(acc, this[i])
    }
    return acc; 
}


const reduceArr = [1,2,3,4,5,6,7,8,30,25,18,16].myReduce((acc, num)=>{
    // console.log('this is num:', num);
    // console.log('this is acc:', acc);
    if(num > acc){
        return num; 
    }
    else{
        return acc; 
    }
},0)

// console.log(reduceArr)