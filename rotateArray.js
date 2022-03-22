const array = [
    ["a", "b", "c"],
    [1, 2, 3],
    ["i", "ii", "iii"]
]

function rotateArray(){
    const newArr = []; 
    for(let i=0; i < array.length; i++){
        newArr.push(array[i].reverse());
    }
    console.log(newArr); 
}

rotateArray(array); 