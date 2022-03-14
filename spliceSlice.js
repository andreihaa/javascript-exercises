

function numbers(arr) {
    let startIndex = 4;
    let amountToDelete = 1; 
    arr.splice(startIndex, amountToDelete, 13, 14);  
    return arr;
  }
  
console.log(numbers([9,10,11,12,12,15,16])); 



function forecast(arr) {
  let todayWeather = arr.slice(1,4);
  console.log(todayWeather);
  console.log(arr); 
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));