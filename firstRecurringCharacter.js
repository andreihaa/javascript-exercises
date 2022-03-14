//Given an array = [2, 5, 1, 2, 3 ,5, 1, 2, 4]; 
//it should return 2 -> first reccuring character

function reccuring(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                console.log('this is recurring', arr[i])
                return arr[i];
            }
        }
    }
    return 'this is not recurring'; 
}

console.log(reccuring([2, 5, 1, 2, 3 ,5, 1, 2, 4]));

function reccuring(arr){
    let map = {}; 
    for(let i=0; i < arr.length; i++){
        if(map[arr[i]] !== undefined){
            return arr[i];
        }
        else{
            map[input[i]] = i; 
        }
        console.log(map); 
    }
    return undefined; 
}

for(let i=0; i < arr.length; i++){
    if(!map[input[i]]){
        map[input[i]] = i; 
    }
    else{
        return arr[i]; 
    }
}