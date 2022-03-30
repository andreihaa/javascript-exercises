const buttons = []
    for(let i=0; i<=2; i++){
        buttons[i]=[]
        for(let j=0; j<=2; j++){
            //[i=0,j=0]/[i=0, j=1]/[i=0,j=2]
            //[i=1,j=0]/[i=1, j=1]/[i=1, j=2]
            //[i=2,j=0]/[i=2, j=1]/[i=2,j=2]
            buttons[i].push({i,j})
        }
    }
console.log(buttons); 
console.log(buttons[0][2])