// function romanize (num) {
//     if (isNaN(num))
//         return NaN;
//     let digits = String(num).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                "","I","II","III","IV","V","VI","VII","VIII","IX"],
//         roman = "",
//         i = 3;
//         console.log(String(num)); 
//     while (i--)
//         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//     return Array(+digits.join("") + 1).join("M") + roman;
// }

// console.log(romanize(1659))

function convertToRoman(num) {

    var numeric = [ 5000,4000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var roman = [ 'V\u0305','I\u0305V\u0305','M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var output = '', i, len = numeric.length;
  
    for (i = 0; i < len; i++) {
      while (numeric[i] <= num) {
        console.log('this is num:', num)
        output += roman[i];
        num -= numeric[i];
      }
    }
    
    return output;
}
  
console.log(convertToRoman(4999));