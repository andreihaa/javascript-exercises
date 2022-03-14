const scores = [929631, 897363, 729231, 645931, 543001, 446991, 329124];

// const highScore = scores[0];
// const secontHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

let aux = 0; 
for (let i=0; i<scores.length; i++){
    for(let j=0; j<scores.length; j++){
        if(scores[i] < scores[j]){
            aux = scores[i];
            scores[i] = scores[j];
            scores[j] = aux; 
        }
    }
}
console.log(scores); 