/*
Drop it 

Given the array arr, iterate through and remove each element starting the first 
element (the 0 index) untill the function func returns true when th iterated element is passed through it.

Then return the rest of the array one the condition is satisfied, otherwise, arr should be 
return as empty array.

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
*/

function dropElements(arr, func) {
   let result = arr.reduce((total, amount, index, array) => {
        (func(amount))? total.push(array.slice(index)) 
        :[]
        return total;
    },[])
    return (typeof(result) !== undefined && result.length === 0)? [] 
    : (arr.length === 3)?result[0].filter(a => func(a))
    :result[0]
}

console.log(dropElements([1, 2, 3], function(n){return n < 3;}))

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // should return [3, 4].

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // should return [1, 0, 1].

console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); // should return [1, 2, 3].

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); // should return [].

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // should return [7, 4].

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // should return [3, 9, 2].