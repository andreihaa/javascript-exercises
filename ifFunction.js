let playerOne = 0;
let playerTwo = 0; 


function incrementPlayerOne () { 
    if (playerOne < 3 && playerTwo < 3) {
        playerOne++; 
    }
    console.log(playerOne, ' ' ,playerTwo);
}

function incrementPlayerTwo () { 
    if (playerTwo < 3 && playerOne < 3) {
        playerTwo++; 
    }
    console.log(playerOne, ' ' ,playerTwo);
}

incrementPlayerOne();
incrementPlayerTwo();
incrementPlayerOne();
incrementPlayerTwo();
incrementPlayerOne();
incrementPlayerTwo();
incrementPlayerOne();
incrementPlayerTwo();


