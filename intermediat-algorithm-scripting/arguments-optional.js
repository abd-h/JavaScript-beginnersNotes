/*          Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addToger(2)  should return a function.

calling this return function with a simgle argument will then return the sum.

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */
/*
const addTogether = (x, y) => {
    function z(a) {
        return Number.isInteger(a);
    }
    if(!z(x)) {
        return undefined;
    } else if(z(x) && z(y)) {
        return x + y;
    } else if(!y){
       return function a (c) {
          if(z(c)) {
              return x + c;
          }
       }
    }
}
*/

// 
 
const addTogether = (...args) => {
    function itsNumber(number) {
        return Number.isInteger(number);
    }
    return (!itsNumber(args[0]))?  undefined
   
    :(itsNumber(args[0]) && itsNumber(args[1]))? args[0] + args[1]
    
    :(!args[1])?  function secArg(num) {
            if(itsNumber(num)) {
                return args[0] + num;
            }
        }
    : undefined
}

console.log(addTogether(2,3)); // should return 5.

console.log(addTogether(23, 30)); // should return 53.

console.log(addTogether(5)(7)); // should return 12.

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // should return undefined.

console.log(addTogether(2, "3")); // should return undefined.

console.log(addTogether(2)([3])); // should return undefined.

console.log(addTogether("2", 3)); // should return undefined.

// Using Arrow function

const addTogether1 = (a, b) => {
    function itsNum(num) {
    return Number.isInteger(num);
    }
    return    (!itsNum(a))? undefined
                :(itsNum(a) && itsNum(b))? a + b 
                :(!b)? function newParam(num) {
                    return (itsNum(num))? a + num
                    : undefined
                }
                : undefined
}
   

console.log(addTogether1(2,3)); // should return 5.

console.log(addTogether1(23, 30)); // should return 53.

console.log(addTogether1(5)(7)); // should return 12.

console.log(addTogether1("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // should return undefined.

console.log(addTogether1(2, "3")); // should return undefined.

console.log(addTogether1(2)([3])); // should return undefined.

console.log(addTogether1("2", 3)); // should return undefined.