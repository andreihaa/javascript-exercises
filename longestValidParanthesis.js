// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// '()()(())('

function paranthesis(string){
    let max = 0; 
    let substring = '';
    for (let i = 0; i < string.length; i++){
        if(string[i] === '('){
            for (let j = i + 1; j < string.length; j++){
                if(string[j] === ')'){
                    console.log(`this is i: ${i}, this is j: ${j}`); 
                    if(j - i - 1 > max){
                        max = j - i - 1; 
                        substring = string.substring(i, j + 1);
                        console.log(max); 
                        console.log(substring); 
                    }
                }
            }
        }
    }
    console.log(max); 
    console.log(substring); 
}

paranthesis('()()(())(');

