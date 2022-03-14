

function palindrome(str){
    return new Promise((res, rej) => {
        let newString = [];
        for(let i = str.length - 1; i >= 0; i--){
            newString = newString.concat(str[i])
        }
        newString = newString.join("")
        setTimeout(() => {
            if(str ===""){
                rej('string is empty')
            }
            else if(str === newString){
                res(true);
            }
            else{
                res(false);
            }
        }, 1000)
    })
}

palindrome('wow')
    .then((el) => {
        console.log(el); 
    })
    .catch((err) =>{
        console.log(err); 
    })

