/*          Return part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. 
It can take two arguments, the first gives the index of  where to begin the slice, 
the second is the index where to end the slice(and it's non inclusive).

If arguments are not provided, the default is to start at the beginning of  the array 
through the end, which is easy way to make a copy of an entire array.

The slice method does not mutate the original array, but returns a new one.

Here is an example*/
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray1 = arr.slice(1, 3);
console.log("....................................................");
console.log(newArray1);
// newArray1 would have ["Dog", "Tiger"]

                            /********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* ********/
/* Use the slice method in the sliceArray function to return part of the anim array 
given the provided beginSlice and endSlice indeces. 
The function should return an array.*/      

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
console.log(":::::::::::::::::::::::::::::::::::::::::::::");
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Remove Elements from an Array Using slice instead of splice

A common pattern while working with arrays is when you want remove items and keep the rest  of the array.
JavaScript offers the splice method for this, which takes an arguments for the index of where to start removing items, then the number of  items to remove. if the secod argument is not provided, the default is to remove items through  to the end. However, the splice method mutates the original array it is called on.

Here's an example:*/

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(cities);
const spliceCities = cities.splice(3,1);
console.log(spliceCities);
console.log(cities);

/* Here splice returns the string London and deletes it from the cities array.
cities will have the value  ["Chicago", "Delhi", "Islamabad", "Berlin"].

As we saw in the last challenge, the slice mehtod does not mutate the original array, 
but returns a new one which can be saved into a variable. Recall thatthe slice method take two arguments for the indices tohin and the slice(the end is non-inclusive), and returns those items in a new array.

Using the slice method instead of splice helps to avoid any array-mutating side effects.*/

                            /********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* ********/

/* Rewrite the function nonMutatingSplice by using slice instead of splice.
It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array ptovided to the function.

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);*/  

function nonMutatingSplice(cities) {
    const copyCities = cities.slice();
    copyCities.splice(3);
    return copyCities;
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* Combine Two Arrays Using the concat Method

Concatination means to hoin items end to end. JavaScript offers the concat method for both strings and arrays
that work in the same way. gor arrays. the method is called on one, then anither array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:*/
const twoArr = [1,2,3].concat([4,5,6]);
console.log(twoArr);
/*The returned array would be [1, 2, 3, 4, 5, 6]

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of  original.
The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);*/

function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}
const first = [1, 2, 3],
         second = [4,5];
console.log(nonMutatingConcat(first, second));         
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*
Add Elements to the End of an Array Using concat Instead of  push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array its called on, which mutates the array. Here's an example:*/

const concatArr = [1,2, 3];
concatArr.push([4,5, 6]);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
console.log(concatArr);
// concatArr would have a modified value of  [1,2,3,[4, 5,6]]

/* concat offers a way to add new items to the end of an array without any mutinting side effects.'

Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push.
The function should retain an array.

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);*/

function nonMutatingPush(original, newItem){
    return original.concat(newItem);
}
const first1 = [1,2,3],
          second2 = [4, 5];
console.log(nonMutatingPush(first1, second2));          
