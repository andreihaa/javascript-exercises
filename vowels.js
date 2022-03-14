function getVowels(string){
    return new Promise((res,rej) => {
        setTimeout(() => {
            const obj = {};
            for(let s of string){
                if(['a','e','i','o','u'].includes(s)){
                    if(obj[s]){
                        obj[s]= obj[s] + 1;
                    }
                    else{
                        obj[s] = 1;
                    }
                }
            }
            res(obj);
        },1000)
    })
}

getVowels('quick brown fox jumps over the lazy dog').then(console.log);

// function print(num){
//     console.log(num); 
// }


//linked functie de adaugare, functie de stergere, functie cautare pozitie. fiecare functie e un promise care se rezolva dupa o secunda