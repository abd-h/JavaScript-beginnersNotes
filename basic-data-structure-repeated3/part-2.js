/*              Remove Items from an Array with pop() and shift()
Both push() and unshift() have corrosponding methods that are nearly functional opposites:
pop() and shiftt().
As you may have guessed by now, instead of adding, pop() removes an elements frome the
end of an array, while shift() removes an elements from the beginning. The key difference between 
pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at the time.

let's take a look:*/

let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop(); // greetings would have ["whats up",  "hello"];

greetings.shift(); /* greetings would have ["hello"];

We can also return the value of the removed element with either method like this:*/

let popped = greetings.pop();
/* greetings would have the value [], and popped would have the value of hello.

We have defined a function, popShift, which takes an  array as an argumt and 
returns a new array. Modify the function, using pop() and shift(), to remove the first 
and last elements of the argument array, and assign the removed elements to their corrosponding variables,
so that the returned array contains their values.
    
    function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));*/

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete'])); /*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Remove Items Using splice()
Ok, so we've learned how to removed elements from the beginning and end of arrays using 
shift() and pop(), but what if we want to remove an element from somewhere in the middle?
Or remove more than one element at once? Well, that's where splice() comes in. splice() allows
us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 paramemters, but for now we'll focus on just 2. The first two parameters
of splice() are intergers which represent indexes, or positions, of the array that splice() is being 
called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array,
we would use 0. splice()'s first parameter represent the index on the array from which to begin 
removing elements, while the second parameter indicates the number of elements to delete. 
For example:*/

let array = ["today", "was", "not", "so", "great"];

array.splice(2,2);
/* Here we remove 2 elements, beginning with third element (at index 2). array would have the 
value ["today", "was", "great"].

splice() not only modifies the array it's being called on, but it also returns a new array containing the
value of the removed elements:*/

let array2 = ["I", "am", "feeling", "really", "happy"];

let newArr = array2.splice(3,2); /* newArray has the value ["really", "happy"]

We've initialized an array arr. Use splice() to remove elements from arr, so that it contains elements 
that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1);
arr.splice(3);
console.log(arr); /* returns [4,5, 1] 

                    Add Items Using splice()
Remember in the last challenge we mention that splice() cant take up to three parameters?
Well, you can use the third parameters, comprised of one or more element(s), to add to the array.
This can be incredibly useful for quickly switching out an element, or set of elements for another.*/

let numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const endIndex = 1;

numbers.splice(startIndex, endIndex, 13, 14);
console.log(numbers); /* The second occurrence of 12 is removed, and we added 13 and 
add 13 and 14 at the same index. The numbers array would now have [10, 11, 12, 13, 14, 15].

Here, we begin with array of numbers. Then, we pass the following to splice(): The index
at which to begin deleting elements (3), the number of elements to be deleted (1), and the remainng 
argujment (13, 14) will be inserted starting at the same index. Note that there can be any numver of 
elements (seperated by commas) following amountToDelete, each which gets inserted.


We have defined a function, htmlmColorNames, which takes an array of HTML colors as an arguments.
Modify the function using splice() to remove the first two elements of the array and add  "DarkSalmon"
and "BlanchedAlmon" in their representative places

function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

function htmlColorNames(arr) {
    arr.splice(0,2, "DarkSalmon", "BlanchedAlmon");
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));