/*Avoid Mutations and Side Effects Using Functional Programming

 If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. 

 Unfortunately, splice changes the original array it is called on, so the second call to it used the modified array, and gave unexpected results.

 This is small example of much larger partten- you call a function on avariable, array, or an object, and the function changes the variable or something in the object.

 One of the core principles of functional programming is to not change anythings. Change leads to bugs. It's easier to prevent bugs knowing that your function don't change anything, including the function arguments or any global variable.

 The previous example didn't have any complicated operations, but the splice method change the original array, and resulted in a bug.

Recall that in funtional programming, change or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it will not cause side effects.

Let's try to master this discipline and not alter any variable or object in our code.

    ********* ********* ********* ********
    *                  CHALLENGE FOUR                 *
    * ********* ********* ********* ******

Fill in the code for the function incremener so it returs a the value of the global variable fixedValue incremented by one.
 */

// The global variable
let fixedValue = 4;

function incrementer() {
    let count = fixedValue;
   
}
console.log(incrementer());
console.log(incrementer());
/*************************************************
 ************************************************
 
Pass Arguments to Avoid Extenal Dependance in a Function

The last challenge was a step closer to functional programming principles, but there's still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Anothe principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle.
The function is easier to test, you know exactly what input it takes, and it won,t on anything else in your program.

This can give more confindence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function wouldl always produce the same output for the same set of outputs, no matter what part of the code executes it.

    ********* ********* ********* *********
    *                  CHALLENGE FIVE                 *
    * ********* ********* ********* *******
Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

*/

let fixedValue2 = 4;
function incrementer2(number) {
    number++
    return number;
}
console.log(incrementer2(fixedValue2));
console.log(fixedValue2);

/************************************************************************************************

Refactor Global Variables out of functions

So far, we have seen two distinct priciples for functional programming:

    1.    Don't alter a variable or object - create new 
          variables or objects and return them if need be from a function. 
          Hint: using something like const newArr = arrVar, 
          where arrVar is an array will simply is an array will simply create a reference to the existing variable and not a copy. 
          So changing the value in newArr would change the value in arrVar.
          
    2.   Declare function parameters - any computation inside a function depends only the arguments passed to the fumction and not any global object or variable.
    
Adding one to a number is not very exciting, but we can apply these principles with arrays or more complex objects. 

    ********* ********* ********* *********
    *                  CHALLENGE FIVE                     *
    * ********* ********* ********* *******
    
Rewrite the code so the global array bookList is not changed in side the function. The add function should add the given bookName to the end of the array passed to it and return new array(list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before bookName parameter.
*/

// The global variable
const bookList = [
    'The Hound of the Baskervilles', 'On the Electrodynamics of Moving Bodies', 'Philosophiea Naturalis Principia Mathmatica', 'Disquisitiones Arithmeticae'
];

// Change code below this line
function add(bookList, bookName) {
    const newBookList = bookList.slice();
    newBookList.push(bookName);
    return newBookList;
}
// console.log(add(bookList, "Just updated"));
// console.log(bookList);

// Change code below this line
function remove(bookList, bookName) {
    const book_index = bookList.indexOf(bookName[1]);
    const newBookList = bookList.slice();
    if (book_index >= 0) {
        newBookList.splice(book_index, 1);
    }
    return newBookList;
}

const newBookList = add(bookList, `A Brief  History of Time`);
console.log(`---------------------------------------`);
console.log(newBookList);
const newerBookList = remove(bookList, `On The Electrodynamics of Moving Bodies`);
console.log(`---------------------------------------`);
console.log(newerBookList);
const newestBookList = remove(add(bookList, `A Brief History of Time`), `On The Electrodynamics of  Moving Bodies`);

console.log(`---------------------------------------`);
console.log(newestBookList);