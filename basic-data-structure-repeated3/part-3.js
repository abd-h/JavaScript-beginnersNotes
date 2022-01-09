/*              Copy Array Items Using slice()
The next method we will cover is slice(). Rather than modifying on array, 
slice() copies or extracts a given number of elements to a new array, leaving t
he array it is called upon untouched. slice() takes only 2 parameters - the first
is the index at which to begin extraction, and the second is the index at which to
stop extraction (extraction will occur up to, but not including the elements at this index).
consider this: */

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); /* todaysWeather would have the value ["snow", "sleet"], 
while weatherCondition would still have ["rain", "snow", "sleet", "hail", "clear"].

In fact, we have created a new array by extracting elements from an existing array.

We have defined a function, forcast, that takes an array as an argument. Modify 
the fuction using slice() to extract information from the argument array and return a 
new array that contains the string elements warm and sunny.

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/

function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Copy an Array with the Spread Operator
While slice() allows us to be selective about what elements of an array to copy, amoung
several other useful task, ES6's new spread operator allows us to easily copy all of an array's
elements, in order, with the simple and highly readible syntax. The spread operator looks like 
this: ...

In practice, we can use the spread operator to copy an array like so:*/

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray); /* thatArray is equals [true, true, undefined, false, null].
thisArray remains unchanged and thatArray contains the same elements as thisArray.

We hav defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
The function is supposed to return a new array made up of num coppies of arr. We have done most 
of the work fot you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we already covered might come in handy here!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));*/

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr
}
console.log(copyMachine([true, false, true], 2)); // should return [[true, false, true], [true, false, true]]

console.log(copyMachine([1, 2, 3], 5)); // should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]

console.log(copyMachine([true, true, null], 1)); // should return [[true, true, null]]

console.log(copyMachine(["it works"], 3)); // should return [["it works"], ["it works"], ["it works"]]

/*The copyMachine function should utilize the spread operator with array arr
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Combine Arrays with the Spread Operator
Another huge adventage of the spread operator is ability to combinr arrays, or to insert all the elements 
of another array into another, at  any index. With more traditional sytaxes, we can concatinate arrays, 
but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax make the following operation extreamely simple:*/

let vegetables = ["sage", "cilantro", "parsley", "corindor"];
let moreVeg = ["basil", "cilantro", ...vegetables];
console.log(moreVeg); /* moreVeg would have the value: 
['basil', 'cilantro', 'sage', 'cilantro', 'parsley', 'corindor'].

Using spread syntax, we have just achieved an operation that would have been more comples and more 
verbose had we used traditional methods.

We have defined a function spreadOut that returns the variable sentence. Modify the function
using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', '

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());*/

function spreadOut() {
    let fragment = ["to", "code"],
        sentence = ["learning", ...fragment, "is", "fun"];
    return sentence; 
}
console.log(spreadOut());