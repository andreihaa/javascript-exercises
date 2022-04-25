//sum of all pairs of numbers and remainder 

const arr = ['red','yellow','blue','white','red','yellow','blue','white','yellow','blue','white','yellow','blue']; 

function matchPairs(arr){
    const pairCount= {};
    for(let i=0; i<arr.length; i++){
      if(!pairCount[arr[i]]){
        pairCount[arr[i]] = 1; 
      }
      else{
        pairCount[arr[i]]++; 
      }
    }
    for(el in pairCount){
        console.log(el, + ' ' + Math.floor(pairCount[el]/2) + ' ' + 'pairs');
        if(pairCount[el] % 2 === 1){
            console.log(el + ' has one left over')
        }
    }
}

matchPairs(arr); 