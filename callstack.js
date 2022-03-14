const multiply = function multi(x, y){
    return x * y;
}
const square = function makeSquare (x){
    return multiply(x, x)
};
const isRightTriangle = function isRight(a, b, c){
    return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5);
